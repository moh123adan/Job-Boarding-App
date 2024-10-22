import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import { TextArea, TextField, Theme } from "@radix-ui/themes";

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
  const oms = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
    organizationId: orgId,
  });
  const hasAccess = oms.data.length > 0;

  if (!hasAccess) {
    return "You do not have access to this organization";
  }

  return (
    <Theme>
      <form action="" className="container mt-6">
        <TextField.Root placeholder="job title" />
        <TextArea placeholder="Job description" />
      </form>
    </Theme>
  );
}
