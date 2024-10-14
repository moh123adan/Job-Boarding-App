// /app/actions/authActions.js (or .ts if using TypeScript)
"use server"; // This marks the file as a server action

import { signOut } from "@workos-inc/authkit-nextjs";

// Define the logout action
export async function logoutAction() {
    await signOut();
}
