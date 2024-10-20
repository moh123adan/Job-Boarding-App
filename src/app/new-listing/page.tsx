import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
// import Link from "next/link";
// import toast from "react-hot-toast";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function NewListingPage() {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  const { user } = await getUser();

  if (user) {
    const organizationMemberShip =
      await workos.userManagement.listOrganizationMemberships({
        userId: user.id,
      });
  }

  // if (!user) {
  //   return <div>toast.success("you need to be logged in to post job")</div>;
  // }

  // const organizationMemberShip =
  //   await workos.userManagement.listOrganizationMemeberships({
  //     userId: user.id,
  //   });

  // const activeOrganizationMemberShips = organizationMemberShips.data.filter(om => om.status === "active");

  // const organizationNames: { [key: string]: string } = {};

  // for (let activeMembership of activeOrganizationMemberShips) {
  //   const organization = await organization.getOrganization(activeMembership.organizationId);
  //   organizationNames[organizationId] = organization.name;
  // }

  return (
    <div className="container mt-42">
      <div>
        {!user && <div>You need to be logged in to post</div>}
        {user && (
          <div>
            <h2 className="text-lg mt-6">Your companies</h2>
            <p className="text-gray-500 text-sm mb-2">
              Select a company to create a job add for{" "}
            </p>
            <div className="border border-red-200 bg-red-50 p-4 rounded-md">
              No companies found assigned to your user
            </div>

            <h2 className="text-lg">Create new company</h2>
            <p className="text-gray-500 text-sm mb-2">
              To create a job listing, you first need to register a company.
            </p>
            <form action="" className="flex gap-2">
              <input
                className="p-2 border border-gray-400 rounded-md mb-4"
                type="text"
                placeholder="Company name"
              />
              <button className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
                Create company
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
