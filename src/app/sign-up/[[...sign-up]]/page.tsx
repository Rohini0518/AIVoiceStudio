import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1020] px-6 py-10">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Main Card */}
      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-[#121827] shadow-[0_20px_80px_rgba(0,0,0,0.55)] lg:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-violet-900 via-indigo-900 to-cyan-900 p-12">
          <span className="mb-6 w-fit rounded-full border border-violet-300/20 bg-white/10 px-4 py-1 text-sm font-medium text-violet-100 backdrop-blur-sm">
            AI Voice Studio
          </span>

          <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-white">
            Create Your
            <br />
            Account 🚀
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-slate-300">
            Join thousands of creators using AI Voice Studio to generate,
            organize and manage high-quality AI voices effortlessly.
          </p>

          <div className="mt-12 space-y-6">
            <Feature icon="🎤" text="Generate Realistic AI Voices" />
            <Feature icon="☁️" text="Save Projects Securely in the Cloud" />
            <Feature icon="⚡" text="Get Started in Less Than a Minute" />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-center bg-[#111827] p-10">
          {/* Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative w-full max-w-md">
            <SignUp
              appearance={{
                variables: {
                  colorPrimary: "#7c3aed",
                  borderRadius: "14px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl backdrop-blur-sm">
        {icon}
      </div>

      <span className="text-lg text-slate-200">{text}</span>
    </div>
  );
}