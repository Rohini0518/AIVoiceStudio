import { OrganizationList } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function OrgSelectionPage() {
  console.log("org selection page")
  await auth.protect();

  return (
    <div>
      <h1>Organization Selection</h1>
      <OrganizationList 
      hidePersonal
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      />
    </div>
  );
}
