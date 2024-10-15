// /pages/api/logout.ts
import { NextApiRequest, NextApiResponse } from "next";
import { signOut } from "@workos-inc/authkit-nextjs";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        await signOut(); // Execute logout action
        res.status(200).json({ message: "Successfully logged out" });
    } catch (error) {
        console.error("Logout failed:", error);
        res.status(500).json({ error: "Failed to log out" });
    }
}
