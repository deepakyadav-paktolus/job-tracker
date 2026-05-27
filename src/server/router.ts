import { router } from "./trpc";
import { formData } from "./trpc/router/addform";
import { authRouter } from "./trpc/router/auth";
import { userRouter } from "./trpc/router/user";

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  formData: formData,
});

export type AppRouter = typeof appRouter;
