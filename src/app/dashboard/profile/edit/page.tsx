'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema, ProfileFormData } from "@/validations/edit-profile";
import Image from "next/image";

export default function Edit() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      bio: "",
      website: "",
      twitter: "",
      linkedin: "",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    setLoading(true);

    try {
      console.log("Validated Data:", data);

      await new Promise((res) => setTimeout(res, 1000));

      alert("Profile updated successfully!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">Edit Profile</h1>
          <p className="text-muted-foreground mt-2">
            Update your account information safely with validation
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border rounded-2xl p-6 space-y-6"
        >

          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-xl font-bold">
              <Image src="/defaultProfile.webp" className="w-20 h-20 rounded-full" alt="avatar" width={90} height={90} />
            </div>

            <div>
              <button type="button" className="border px-4 py-2 rounded-xl text-sm">
                Upload Photo
              </button>
              <p className="text-xs text-muted-foreground mt-1">
                JPG, PNG or GIF (max 2MB)
              </p>
            </div>
          </div>

          <div className="grid gap-4">

            <div>
              <input
                {...register("name")}
                className="w-full border rounded-xl p-3 bg-transparent"
                placeholder="Full Name"
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>

            <div>
              <input
                {...register("username")}
                className="w-full border rounded-xl p-3 bg-transparent"
                placeholder="Username"
              />
              <p className="text-red-500 text-sm">{errors.username?.message}</p>
            </div>

            <div>
              <input
                {...register("email")}
                className="w-full border rounded-xl p-3 bg-transparent"
                placeholder="Email"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div>
              <input
                {...register("phone")}
                className="w-full border rounded-xl p-3 bg-transparent"
                placeholder="Phone"
              />
            </div>

            <div>
              <textarea
                {...register("bio")}
                className="w-full border rounded-xl p-3 bg-transparent"
                placeholder="Bio"
                rows={4}
              />
              <p className="text-red-500 text-sm">{errors.bio?.message}</p>
            </div>

          </div>

          <div className="grid gap-4">

            <div>
              <input
                {...register("website")}
                className="w-full border rounded-xl p-3 bg-transparent"
                placeholder="Website"
              />
              <p className="text-red-500 text-sm">{errors.website?.message}</p>
            </div>

            <input
              {...register("twitter")}
              className="w-full border rounded-xl p-3 bg-transparent"
              placeholder="Twitter"
            />

            <input
              {...register("linkedin")}
              className="w-full border rounded-xl p-3 bg-transparent"
              placeholder="LinkedIn"
            />
          </div>

          <div className="flex justify-end pt-4 border-t">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-xl"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}