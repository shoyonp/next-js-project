"use client";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";

const Profile = () => {
  return (
    <ProtectedRoute>
      <div>
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to your profile!</h1>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
