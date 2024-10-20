"use server";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import { AutoPaginatable, OrganizationMembership } from "@workos-inc/node"; // Ensure necessary types are imported
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import createCompany from "../actions/workosActions";
import Link from "next/link";

export default async function NewListingPage() {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  const { user } = await getUser();

  // If the user is not logged in, return a message
  if (!user) {
    return (
      <div className="container">
        <div>You need to be logged in to post</div>
      </div>
    );
  }

  // Initialize variable for organization memberships
  const organizationMemberships: AutoPaginatable<OrganizationMembership> | null =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  return (
    <div className="container mt-42">
      <div>
        <pre>
          {/* Display organization memberships */}
          {organizationMemberships &&
            JSON.stringify(organizationMemberships, null, 2)}
        </pre>

        <h2 className="text-lg mt-6">Your companies</h2>
        <p className="text-gray-500 text-sm mb-2">
          Select a company to create a job ad for{" "}
        </p>
        <div className="border border-red-200 bg-red-50 p-4 rounded-md">
          No companies found assigned to your user
        </div>

        <Link
          className="inline-flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md mt-6"
          href="/new-company"
        >
          Create new company
          <FontAwesomeIcon className="h-4" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
