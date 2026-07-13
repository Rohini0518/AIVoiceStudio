import { cookies } from "next/headers";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cokkieStore=await cookies();
const defaultOpen=cokkieStore.get("sidebar_state")?.value==="true";

  return (
    <div>
      <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
        <DashboardSidebar/>
        <SidebarInset className="min-h-0 min-w-0">
          <main>{children}</main>
        </SidebarInset>

      </SidebarProvider>
    </div>
  );
}
