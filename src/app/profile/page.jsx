"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../shareauth/authContext";
import { useEffect } from "react";

const Profile = () => {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user?.email) {
      router.replace("/api/auth/login");
    }
  }, [user, isLoading, router]);

  if (isLoading)
    return (
      <section className="min-h-screen flex justify-center items-center ">
        <p className="text-2xl">Loading . . .</p>
      </section>
    );

  if (!user?.email) {
    return null;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to your profile!</h1>
      </div>
    </div>
  );
};

export default Profile;
