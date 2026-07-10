import { auth } from "@clerk/nextjs/server";

export default async function OrgSelectionPage() {
  await auth.protect();

  return (
    <div>
      <h1>Organization Selection</h1>
    </div>
  );
}
