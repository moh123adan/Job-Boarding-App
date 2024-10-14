"use server";

import { getSignInUrl, getUser, getSignUpUrl } from "@workos-inc/authkit-nextjs";

export async function fetchUser() {
    const user = await getUser();
    return user;
}

export async function fetchSignUpUrl() {
    const signUpUrl = await getSignUpUrl();
    return signUpUrl;
}

export async function fetchSignInUrl() {
    const signInUrl = await getSignInUrl();
    return signInUrl;
}

console.log("SignInUrl")
