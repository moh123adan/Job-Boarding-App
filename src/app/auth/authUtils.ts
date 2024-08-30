
"use server";

import { getSignInUrl, getUser } from "@workos-inc/authkit-nextjs";

export async function fetchUser() {
    const user = await getUser();
    return user;
}

export async function fetchSignInUrl() {
    const signInUrl = await getSignInUrl();
    return signInUrl;
}
