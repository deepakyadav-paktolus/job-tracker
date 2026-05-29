"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { SignUpSchema } from "@/validations/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type FormData = z.infer<typeof SignUpSchema>;

const SignUp = () => {
  const router = useRouter();
  const signupMutation = trpc.auth.signup.useMutation();
  const isLoading = signupMutation.isPending;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(SignUpSchema) });

  const handleSignUp = async (data: FormData) => {
    try {
      await signupMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error?.message || "Signup failed");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-start">
        <div className="bg-[url('/login-img.jpg')] bg-cover bg-center w-full max-w-md h-full">
          <div className="flex items-end justify-center h-full relative">
            <p className="text-white px-9 pb-9 absolute top-10 left-0 text-4xl font-bold z-10 drop-shadow-lg">
              TiM
            </p>
            <div className="">
              <h1 className="text-2xl font-bold text-white px-9 mb-5">
                Your Career Dashboard Awaits Manage interviews, offers, and
                follow-ups in one place.
              </h1>
              <p className="text-white px-9 pb-9">
                Stay organized, track progress, and close more opportunities
                with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen w-screen flex flex-col justify-center border-l border-gray-200 items-center bg-white">
          <div className="">
            <div className="flex flex-col justify-center items-center mb-9">
              <h1 className="text-4xl font-bold text-gray-800">
                Organize Your Job Search
              </h1>
              <h2 className="text-lg text-gray-600">
                Track progress from application to offer.
              </h2>
            </div>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="flex flex-col text-black">
                <label className="mb-2">Email</label>
                <Input
                  type="text"
                  className="border-gray-300 focus:border-gray-600 mb-4"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 mb-4">{errors.email.message}</p>
                )}
                <label className="mb-2">Password</label>
                <Input
                  type="password"
                  className="border-gray-300 focus:border-gray-600 mb-4"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 mb-4">{errors.password.message}</p>
                )}
                <label className="mb-2">Confirm Password</label>
                <Input
                  type="password"
                  className="border-gray-300 focus:border-gray-600 mb-4"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")} // ✅ register it properly
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 mb-4">
                    {errors.confirmPassword.message}
                  </p>
                )}
                <Button
                  className="w-full"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? "Signing up..." : "Sign Up"}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;