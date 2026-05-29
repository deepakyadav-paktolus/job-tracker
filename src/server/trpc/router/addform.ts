import z from "zod";
import { protectedProcedure, publicProcedure, router } from "../../trpc";
import { db } from "@/lib/prisma";
import { JobStatus, WorkMode } from "@prisma/client";

const jobApplicationSchema = z.object({
  companyName: z.string().min(1),
  jobTitle: z.string().min(1),
  role: z.string().min(1),
  status: z.nativeEnum(JobStatus),
  appliedDate: z.coerce.date(),
  location: z.string().min(1),
  salary: z.string().optional(),
  link: z.string().url().optional().or(z.literal("")),
  notes: z.string().optional(),
  mode: z.nativeEnum(WorkMode),
});

const createJobSchema = jobApplicationSchema;
const updateJobSchema = jobApplicationSchema.extend({
  id: z.string(),
});

export const formData = router({
  create: publicProcedure
    .input(createJobSchema)
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) throw new Error("Unauthorized");

      return db.jobApplication.create({
        data: {
          ...input,
          userId: ctx.user.id,
        },
      });
    }),

  update: publicProcedure
    .input(updateJobSchema)
    .mutation(async ({ input, ctx }) => {
      const { id, ...data } = input;

      return db.jobApplication.update({
        where: { id },
        data,
      });
    }),
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return db.jobApplication.findUnique({
        where: {
          id: input.id,
          userId: ctx.user.id,
        },
      });
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new Error("Unauthorized");
    }

    return db.jobApplication.findMany({
      where: {
        userId: ctx.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return db.jobApplication.delete({
        where: {
          id: input.id,
        },
      });
    }),
  deleteMany: publicProcedure
    .input(z.object({ ids: z.array(z.string()) }))
    .mutation(async ({ input }) => {
      return db.jobApplication.deleteMany({
        where: {
          id: {
            in: input.ids,
          },
        },
      });
    }),
    searchByTitle: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(async ({ input }) => {
      return db.jobApplication.findMany({
        where: {
          jobTitle: {
            contains: input.title,
          },
        },
      });
    }),
    filterByStatus: publicProcedure
    .input(z.object({ status: z.nativeEnum(JobStatus) }))
    .query(async ({ input }) => {
      return db.jobApplication.findMany({
        where: {
          status: input.status,
        },
      });
    }),
});
