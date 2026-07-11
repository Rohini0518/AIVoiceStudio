import { OrganizationSwitcher } from "@clerk/nextjs";
import { Building2, FolderKanban, Users, Mic2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] px-6 py-12">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-600/20">
            <Mic2 className="h-10 w-10 text-violet-400" />
          </div>

          <h1 className="mt-8 text-5xl font-bold text-white">
            Welcome to Voice Studio
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Before creating AI voice projects, select an organization or create
            a new one. Organizations help you manage projects, collaborate with
            your team, and keep everything organized.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <BenefitCard
            icon={<FolderKanban className="h-7 w-7 text-violet-400" />}
            title="Manage Projects"
            description="Keep all voice generations, scripts, and assets neatly organized in one workspace."
          />

          <BenefitCard
            icon={<Users className="h-7 w-7 text-cyan-400" />}
            title="Collaborate"
            description="Invite teammates and work together with shared projects and permissions."
          />

          <BenefitCard
            icon={<Building2 className="h-7 w-7 text-pink-400" />}
            title="Separate Workspaces"
            description="Create multiple organizations for clients, companies, or personal projects."
          />
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-slate-800 bg-[#fff] p-10 shadow-xl">
          <h2 className="text-center text-2xl font-semibold">
            Choose Your Organization
          </h2>

          <p className="mt-3 text-center ">
            Select an existing organization or create a new one to start using
            Voice Studio.
          </p>

          <div className="mt-8 flex justify-center">
            <OrganizationSwitcher
              afterCreateOrganizationUrl="/"
              afterSelectOrganizationUrl="/"
              hidePersonal={false}
            />
          </div>

          <div className="mt-8 rounded-xl border border-violet-700/50 bg-violet-600/80 p-5">
            <p className="text-center text-sm text-white">
              💡 <strong>Tip:</strong> If you're working with different clients
              or teams, create separate organizations to keep projects,
              collaborators, and voice assets organized.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#121827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-900/20">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </div>
  );
}