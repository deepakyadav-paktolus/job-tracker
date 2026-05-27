import { z } from "zod";
import { cookies } from "next/headers";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../../trpc";
import { db } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/auth";

export const authRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.email(),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ input }) => {
      const exists = await db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (exists) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User already exists",
        });
      }

      const user = await db.user.create({
        data: {
          email: input.email,
          password: await hashPassword(input.password),
        },
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
        },
      };
    }),

  login: publicProcedure
    .input(
      z.object({
        email: z.email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      const ok = await verifyPassword(
        input.password,
        user.password
      );

      if (!ok) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      const session = await db.session.create({
        data: {
          userId: user.id,
        },
      });

      const cookieStore = await cookies();
      cookieStore.set("session", session.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
        },
      };
    }),

  logout: publicProcedure.mutation(async () => {
    const cookieStore = await cookies();
    const sessionId =
      cookieStore.get("session")?.value;

    if (sessionId) {
      await db.session.deleteMany({
        where: {
          id: sessionId,
        },
      });
    }
    cookieStore.delete("session");
    return {
      success: true,
    };
  }),
});