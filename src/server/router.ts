import { router } from "./trpc";
import { authRouter } from "./trpc/router/auth";
import { userRouter } from "./trpc/router/user";

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
