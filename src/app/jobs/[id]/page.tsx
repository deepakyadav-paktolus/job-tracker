"use client";
import { trpc } from "@/utils/trpc";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";

const statusStyles: Record<string, { bg: string; text: string; dot: string }> = {
  APPLIED:    { bg: "bg-blue-500/10",   text: "text-blue-400",   dot: "bg-blue-400"   },
  INTERVIEW:  { bg: "bg-yellow-500/10", text: "text-yellow-400", dot: "bg-yellow-400" },
  OFFERED:    { bg: "bg-green-500/10",  text: "text-green-400",  dot: "bg-green-400"  },
  REJECTED:   { bg: "bg-red-500/10",    text: "text-red-400",    dot: "bg-red-400"    },
  GHOSTED:    { bg: "bg-zinc-500/10",   text: "text-zinc-400",   dot: "bg-zinc-400"   },
};

const modeStyles: Record<string, string> = {
  REMOTE:  "bg-teal-500/10 text-teal-400",
  ONSITE:  "bg-orange-500/10 text-orange-400",
  HYBRID:  "bg-purple-500/10 text-purple-400",
};

const Page = () => {
  const { id } = useParams();
  const { data, isLoading } = trpc.formData.getById.useQuery(
    { id: id as string },
    { enabled: !!id }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-zinc-700 border-t-white animate-spin" />
          <p className="text-zinc-500 text-sm font-mono">Loading...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-zinc-500 font-mono">Job not found.</p>
      </div>
    );
  }

  const status = data.status?.toUpperCase() as string;
  const mode   = data.mode?.toUpperCase() as string;
  const st     = statusStyles[status] ?? statusStyles["APPLIED"];
  const md     = modeStyles[mode]     ?? modeStyles["REMOTE"];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-6">

        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="text-zinc-500 hover:text-white text-sm font-mono flex items-center gap-2 transition-colors"
          >
            ← Back
          </Link>
          <div className="flex gap-2">
            <span className={`text-xs font-mono px-3 py-1 rounded-full flex items-center gap-1.5 ${st.bg} ${st.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
              {data.status.charAt(0) + data.status.slice(1).toLowerCase()}
            </span>
            {data.mode && (
              <span className={`text-xs font-mono px-3 py-1 rounded-full ${md}`}>
                {data.mode.charAt(0) + data.mode.slice(1).toLowerCase()}
              </span>
            )}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-1">
          <p className="text-zinc-400 text-sm font-mono">{data.companyName}</p>
          <h1 className="text-2xl font-bold tracking-tight">{data.jobTitle}</h1>
          {data.location && (
            <p className="text-zinc-400 text-sm flex items-center gap-1.5 pt-1">
              <span>📍</span> {data.location}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {data.appliedDate && (
            <InfoCard label="Applied On" value={format(new Date(data.appliedDate), "do MMMM yyyy")} icon="📅" />
          )}
          {data.salary && (
            <InfoCard label="Salary" value={data.salary} icon="💰" />
          )}
        </div>

        {data.role && (
          <Section label="Role Description">
            <p className="text-zinc-300 text-sm leading-relaxed">{data.role}</p>
          </Section>
        )}

        {data.notes && (
          <Section label="Notes">
            <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">{data.notes}</p>
          </Section>
        )}

        {/* Link */}
        {/* {data.link && (
          <Section label="Job Link">
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-mono underline underline-offset-4 transition-colors break-all"
            >
              {data.link}
            </a>
          </Section>
        )} */}

      </div>
    </div>
  );
};


const InfoCard = ({ label, value, icon }: { label: string; value: string; icon: string }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-start gap-3">
    <span className="text-lg">{icon}</span>
    <div>
      <p className="text-zinc-500 text-xs font-mono uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-white text-sm font-semibold">{value}</p>
    </div>
  </div>
);

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
    <p className="text-zinc-500 text-xs font-mono uppercase tracking-wide">{label}</p>
    {children}
  </div>
);

export default Page;