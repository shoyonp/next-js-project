"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Header = () => {
  const { user, isLoading } = useKindeBrowserClient();
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path) => pathname === path;

  return (
    <header className="bg-gray-800 sticky top-0 text-white p-4">
      <nav className="flex justify-between max-w-4xl mx-auto">
        <div>
          <Link
            href="/"
            className={`mr-4 hover:underline ${
              isActive("/") ? "text-yellow-400 font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/profile"
            className={`hover:underline ${
              isActive("/profile") ? "text-yellow-400 font-bold" : ""
            }`}
          >
            Profile
          </Link>
        </div>
        <div>
          {isLoading ? (
            <p className="text-gray-400">Checking auth...</p>
          ) : user ? (
            <LogoutLink>
              <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                Logout
              </button>
            </LogoutLink>
          ) : (
            <LoginLink>
              <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                Login
              </button>
            </LoginLink>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
