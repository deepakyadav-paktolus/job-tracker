"use client";

import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[4px] text-muted-foreground">
            About Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            About <br />
            <span className="text-primary">
              TiM
            </span>
            — Track in Minutes
          </h1>
          <Separator className="w-24 h-1 bg-primary rounded-full" />
        </div>
            <p>
              Welcome to
              <span className="font-semibold text-foreground">
                TiM (Track in Minutes)
              </span>
              , a modern job application tracking platform designed to help
              users manage their job search journey with speed, simplicity, and
              organization.
            </p>
            <p>
              The name
              <span className="font-medium text-primary">
                TiM — Track in Minutes
              </span>
              reflects the core idea of the project: helping users organize and
              track job applications quickly and efficiently.
            </p>
            <p>
              Built using
              <span className="font-semibold text-foreground">
                Next.js
              </span>
              , TiM delivers a fast and smooth experience with modern web
              technologies and optimized performance.
            </p>
            <p>
              Users can manage company names, job roles, interview schedules,
              recruiter details, notes, and application progress from one
              centralized dashboard.
            </p>
            <p>
              TiM helps students, graduates, and professionals maintain better
              control over their job search process while saving time and
              reducing stress.
            </p>
            <div className="rounded-2xl border bg-muted/40 p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Desktop Optimized
              </h2>
              <p>
                Currently, TiM is optimized for desktop use only to provide the
                best dashboard and workflow management experience on larger
                screens.
              </p>
            </div>
            <p>
              Future improvements may include analytics dashboards, reminders,
              AI-powered suggestions, interview preparation tools, and more
              advanced productivity features.
            </p>
            <div className="pt-6 border-t">
              <p className="text-center italic text-sm">
                Thank you for using TiM — Track smarter, stay organized, and
                manage your career journey with ease.
              </p>
            </div>
      </div>
    </div>
  );
};

export default About;
