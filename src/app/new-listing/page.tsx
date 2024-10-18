import { getUser } from "@workos-inc/authkit-nextjs";
// import { WorkOS } from "@workos-inc/node";
// import Link from "next/link";
// import toast from "react-hot-toast";

export default async function NewListingPage() {
  // const workos = new WorkOS(process.env.WORKOS_API_KEY);

  const { user } = await getUser();

  // if (!user) {
  //   return <div>toast.success("you need to be logged in to post job")</div>;
  // }

  // const organizationMemberShip =
  //   await workos.userManagement.listOrganizationMemeberships({
  //     userId: user.id,
  //   });

  //   const activeOrganizationMemberShips = oragnizationMemberShips.data.filter(om => om.status === "active");

  //   const oragnizationNames:{[key: string]: string} = {};

  //   for(activeMembership of activeOrganizationMemberShips) {
  //     const organization = await oragnization.getOrganization(activeMembership.organizationId);

  //     oragnizationNames[organizationId] = organizationName;
  //   }

  return (
    <div className="container mt-42">
      {!user && (
        <div>You need to be logged in to post</div>
      )}
      <div>
        <h1>New listing </h1>
        <div>{JSON.stringify(user)}</div>
      </div>
    </div>
  );
}
