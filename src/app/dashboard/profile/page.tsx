"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Mail,
  MapPin,
  Pencil,
  User2,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ProfilePage = () => {
  const router = useRouter();

  const user = {
    name: "",
    email: "",
    role: "",
    location: "",
    applications: null,
    interviews: null,
    offers: null,
  };

  return (
    <div className="min-h-100vh bg-background text-foreground">

      <div className="pt-10 px-4 md:px-8 pb-10">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Profile
              </h1>

              <p className="mt-2 text-muted-foreground">
                Manage your account information and activity.
              </p>
            </div>

            <Button
              onClick={() =>
                router.push("/dashboard/profile/edit")
              }
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border bg-card/40 backdrop-blur-md p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-28 w-28 border-4 border-primary/10">
                  <AvatarFallback className="text-3xl">
                    A
                  </AvatarFallback>
                </Avatar>

                <h2 className="mt-4 text-2xl font-semibold">
                  {user.name}
                </h2>

                <p className="text-muted-foreground">
                  {user.role}
                </p>

                <div className="mt-6 w-full space-y-4">
                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <Mail className="h-5 w-5 text-primary" />

                    <span className="text-sm">
                      {user.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <MapPin className="h-5 w-5 text-primary" />

                    <span className="text-sm">
                      {user.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <User2 className="h-5 w-5 text-primary" />

                    <span className="text-sm">
                      Active User
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border bg-card/40 backdrop-blur-md p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Applications
                      </p>

                      <h3 className="mt-2 text-3xl font-bold">
                        {user.applications}
                      </h3>
                    </div>

                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="rounded-2xl border bg-card/40 backdrop-blur-md p-6">
                  <p className="text-sm text-muted-foreground">
                    Interviews
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {user.interviews}
                  </h3>
                </div>

                <div className="rounded-2xl border bg-card/40 backdrop-blur-md p-6">
                  <p className="text-sm text-muted-foreground">
                    Offers
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {user.offers}
                  </h3>
                </div>
              </div>

  
              <div className="rounded-2xl border bg-card/40 backdrop-blur-md p-6">
                <h2 className="text-2xl font-semibold">
                  About
                </h2>

                <Separator className="my-4" />

                <p className="leading-7 text-muted-foreground">
                  Passionate frontend developer focused on
                  building scalable and modern web
                  applications using Next.js, TypeScript,
                  Tailwind CSS, and tRPC.
                </p>
              </div>

   
              <div className="rounded-2xl border bg-card/40 backdrop-blur-md p-6">
                <h2 className="text-2xl font-semibold">
                  Quick Actions
                </h2>

                <Separator className="my-4" />

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/dashboard">
                      Dashboard
                    </Link>
                  </Button>

                  <Button variant="secondary" asChild>
                    <Link href="/dashboard/settings">
                      Settings
                    </Link>
                  </Button>

                  <Button variant="outline" asChild>
                    <Link href="/dashboard/help">
                      Help Center
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

