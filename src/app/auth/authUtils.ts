
"use server";

import { getSignInUrl, getUser, getSignUpUrl } from "@workos-inc/authkit-nextjs";

export async function fetchUser() {
    const user = await getUser();
    return user;
}

export async function fetchSignUpUrl() {
    const signOutUrl = await getSignUpUrl();
}

export async function fetchSignInUrl() {
    const signInUrl = await getSignInUrl();
    return signInUrl;
}
