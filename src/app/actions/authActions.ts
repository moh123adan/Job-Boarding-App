// /app/actions/authActions.ts
"use server";

import { signOut } from "@workos-inc/authkit-nextjs";

// Define a server action for logout
export async function logoutAction() {
    await signOut(); // Perform logout logic
}
