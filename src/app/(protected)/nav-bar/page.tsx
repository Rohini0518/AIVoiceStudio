import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              VoiceStudio
            </span>
          </h1>

          <SignOutButton>
            <Button variant="default">Logout</Button>
          </SignOutButton>
        </div>
      </header>

      <main className="flex h-[calc(100vh-64px)] items-center justify-center">
        <h2 className="text-4xl font-bold">
          Welcome to VoiceStudio
        </h2>
      </main>
    </div>
  );
}