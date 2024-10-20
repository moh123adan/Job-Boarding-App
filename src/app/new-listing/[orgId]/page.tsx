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

  if (!user) return <div>Please log in</div>;
  const orgId = props.params.orgId;

  const oms = await workos.userManagement.listOrganizationMemberships({ userId: user.id });

  const om = oms.data.find(om => om.organizationId === orgId);

  return JSON.stringify(om);


  return (
    <form action="" className="container mt-6">
      {JSON.stringify(props)}
      new job form here
    </form>
  );
}
