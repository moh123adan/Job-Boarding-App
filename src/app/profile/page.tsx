"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null); // Store user data
  const router = useRouter();

  // Fetch user data from API
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("/api/user/1"); // Replace '1' with dynamic user ID
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("User not found");
          router.push("/login"); // Redirect to login if user not found
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, [router]);

  if (!user) return <p>Loading...</p>; // Show a loading indicator

  return (
    <div className="container mx-auto mt-8 p-6 max-w-md bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p className="text-lg">
        <strong>Name:</strong> {user.firstName} {user.lastName}
      </p>
      <p className="text-lg">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-lg">
        <strong>Role:</strong> {user.role}
      </p>
      <button
        onClick={() => router.push("/edit-profile")}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
      >
        Edit Profile
      </button>
    </div>
  );
}
