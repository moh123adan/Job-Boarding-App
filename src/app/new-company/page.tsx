import { getUser } from "@workos-inc/authkit-nextjs";
import createCompany from "../actions/workosActions";

export default async function NewCompanyPage() {
  const { user } = await getUser();

  async function handleNewCompanyFormSubmit(data: FormData) {
    "use server";
    if (user) {
      await createCompany(data.get("newCompanyName") as string, user.id);
    }
  }

  if (!user) {
    ("Loggin to use this page");
  }

  return (
    <div className="container">
      <h2 className="text-lg">Create new company</h2>
      <p className="text-gray-500 text-sm mb-2">
        To create a job listing, you first need to register a company.
      </p>
      <form action={handleNewCompanyFormSubmit} className="flex gap-2">
        <input
          name="newCompanyName"
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          placeholder="Company name"
        />
        <button
          type="submit"
          className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md"
        >
          Create company
        </button>
      </form>
    </div>
  );
}
