import { getUser } from "@workos-inc/authkit-nextjs";
// import { WorkOS } from "@workos-inc/node";
// import Link from "next/link";
// import toast from "react-hot-toast";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
      {!user && <div>You need to be logged in to post</div>}
      {user && (
        <div>
          <form action="">
            <div>
              <h2 className="text-lg">Create new company</h2>
              <p className="text-gray-500">
                To Create a job listing your first need to register company
              </p>
              <button className="bg-gray-200 px-4 py-2 rounded-md">
                Create company <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
