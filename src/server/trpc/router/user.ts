import { router, protectedProcedure } from "../../trpc";

export const userRouter = router({
  me: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
});