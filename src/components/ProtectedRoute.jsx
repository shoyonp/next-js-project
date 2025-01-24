"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
        router.push("/api/auth/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (!user) {
    return null; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;
