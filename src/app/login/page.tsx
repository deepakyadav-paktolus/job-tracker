"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { useState } from "react";
const login = () => {
  const router = useRouter();
  const loginMutation = trpc.auth.login.useMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await loginMutation.mutateAsync({
        email,
        password,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      console.log(error)
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
              {" "}
              <h1 className="text-4xl font-bold text-gray-800">
                Welcome Back to the TiM
              </h1>
              <h2 className="text-lg text-gray-600">
                Track progress from application to offer.
              </h2>
            </div>
            <div className="flex flex-col text-black">
              <label className="mb-2">Email</label>
              <Input
                type="text"
                className="border-gray-300 focus:border-gray-600 mb-4"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="mb-2">Password</label>
              <Input
                type="password"
                className="border-gray-300 focus:border-gray-600 mb-4"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="w-full " onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
