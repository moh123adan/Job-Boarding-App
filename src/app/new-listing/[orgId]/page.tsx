import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
type PageProps = {
  params: {
    orgId: string;
  };
};

export default async function NewListingForOrgPage(props: PageProps) {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  if (!user) {
    return "Please log in";
  }

  const orgId = props.params.orgId;

  console.log("User ID:", user.id); // Check if the user ID is valid
  console.log("Org ID:", orgId); // Check if the organization ID is correct

  try {
    const oms = await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
      organizationId: orgId,
    });

    console.log("Organization Memberships:", oms.data); // Check what data is being returned

    const hasAccess = oms.data.length > 0;

    console.log("Has Access:", hasAccess); // Log if access is granted or not

    return JSON.stringify({ hasAccess: hasAccess });
  } catch (error) {
    console.error("Error fetching organization memberships:", error);
    return "An error occurred while checking access.";
  }
}
