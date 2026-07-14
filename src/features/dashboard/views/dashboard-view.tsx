import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "../components/hero-pattern";

export const DashboardView = () => {
  return (
    <div className="relative">
        <PageHeader title="Dashboard" className="lg:hidden"/>
      <HeroPattern />

    </div>
  );
}
