import { WorkOS } from "@workos-inc/node";

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default async function createCompany(data: FormData, userId: string) {
    "use server";
    const org = await workos.organizations.createOrganization({
        name: data.get("newCompanyName") as string,
    });
    await workos.userManagement.createOrganizationMembership({
        userId,
        organizationId: org.id,
        roleSlug: 'admin'
    })
}