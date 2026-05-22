import { db } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function createContext() {
  const cookieStore = await cookies();

  const sessionId = cookieStore.get("session")?.value;

  let user = null;

  if (sessionId) {
    const session = await db.session.findUnique({
      where: {
        id: sessionId,
      },
      include: {
        user: true,
      },
    });

    if (session) {
      user = session.user;
    }
  }

  return {
    user,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;