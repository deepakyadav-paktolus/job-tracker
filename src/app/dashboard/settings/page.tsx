'use client';

import { useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  // UI states (you can later connect to backend)
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [profileVisible, setProfileVisible] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [usageData, setUsageData] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account and system preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Appearance</h2>

            <div className="flex gap-3">
              {["light", "dark", "system"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-4 py-2 rounded-xl border ${
                    theme === t
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : ""
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </section>
          <section className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>

            <div className="space-y-3">
              <input className="w-full border rounded-xl p-3 bg-transparent" placeholder="Full Name" />
              <input className="w-full border rounded-xl p-3 bg-transparent" placeholder="Email" />
              <input className="w-full border rounded-xl p-3 bg-transparent" placeholder="Username" />

              <button className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-xl">
                Save Profile
              </button>
            </div>
          </section>

          <section className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Security</h2>

            <div className="space-y-4">
              <input className="w-full border rounded-xl p-3 bg-transparent" placeholder="Current Password" type="password" />
              <input className="w-full border rounded-xl p-3 bg-transparent" placeholder="New Password" type="password" />

              <button className="bg-red-600 text-white px-5 py-2 rounded-xl">
                Update Password
              </button>
              <div className="flex items-center justify-between border-t pt-4">
                <span>Two-Factor Authentication</span>
                <Switch checked={twoFA} onCheckedChange={setTwoFA} />
              </div>
            </div>
          </section>

          <section className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center">
                <span>Email Notifications</span>
                <Switch checked={emailNotif} onCheckedChange={setEmailNotif} />
              </div>

              <div className="flex justify-between items-center">
                <span>Push Notifications</span>
                <Switch checked={pushNotif} onCheckedChange={setPushNotif} />
              </div>

              <div className="flex justify-between items-center">
                <span>Marketing Emails</span>
                <Switch checked={marketing} onCheckedChange={setMarketing} />
              </div>

            </div>
          </section>

          <section className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center">
                <span>Auto Save</span>
                <Switch checked={autoSave} onCheckedChange={setAutoSave} />
              </div>

              <div className="flex justify-between items-center">
                <span>Dark Mode Sync</span>
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(val) => setTheme(val ? "dark" : "light")}
                />
              </div>

            </div>
          </section>

          <section className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Privacy</h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center">
                <span>Profile Visibility</span>
                <Switch checked={profileVisible} onCheckedChange={setProfileVisible} />
              </div>

              <div className="flex justify-between items-center">
                <span>Online Status</span>
                <Switch checked={onlineStatus} onCheckedChange={setOnlineStatus} />
              </div>

              <div className="flex justify-between items-center">
                <span>Usage Data Sharing</span>
                <Switch checked={usageData} onCheckedChange={setUsageData} />
              </div>

            </div>
          </section>

          <section className="border rounded-2xl p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Data & Storage</h2>

            <div className="flex gap-3">
              <button className="border px-5 py-2 rounded-xl">
                Export Data
              </button>

              <button className="border px-5 py-2 rounded-xl text-red-600">
                Clear Cache
              </button>
            </div>
          </section>

          <section className="border border-red-500 rounded-2xl p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-red-500 mb-4">
              Danger Zone
            </h2>

            <div className="flex gap-3">
              <button className="bg-red-600 text-white px-5 py-2 rounded-xl">
                Delete Account
              </button>

              <button className="border px-5 py-2 rounded-xl">
                Deactivate Account
              </button>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}