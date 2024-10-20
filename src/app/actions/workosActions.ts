import { WorkOS } from "@workos-inc/node";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/client/components/navigation";

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default async function createCompany(companyName: string, userId: string) {
    "use server";
    const org = await workos.organizations.createOrganization({
        name: companyName
    });
     await workos.userManagement.createOrganizationMembership({
        userId,
        organizationId: org.id,
        roleSlug: 'admin'
    });
    revalidatePath('/new-listing')
    redirect('/new-listing')
}