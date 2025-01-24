"use client";

import {
  KindeProvider,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { createContext, useContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const { user, isLoading } = useKindeBrowserClient();

  const userInfo = {
    user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      <KindeProvider>{children}</KindeProvider>
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
