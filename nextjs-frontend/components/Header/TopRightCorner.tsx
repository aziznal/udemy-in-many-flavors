"use client";

import { useAuthContext } from "@/contexts/auth-context";
import { Button } from "../ui/button";
import Link from "next/link";

export type TopRightCornerProps = {
  isServerAuthenticated: boolean;
};

export default function TopRightCorner({
  isServerAuthenticated,
}: TopRightCornerProps) {
  const { isAuthenticated, isLoading, logout } = useAuthContext();

  const isAuth = () => {
    if (isLoading) return isServerAuthenticated;

    return isAuthenticated;
  };

  return (
    <div className="flex flex-row items-center gap-2">
      {isAuth() && (
        <Button variant="outline" onClick={logout}>
          Log out
        </Button>
      )}

      {!isAuth() && (
        <>
          <Button variant={"outline"} asChild>
            <Link href="/join/login">Log in</Link>
          </Button>

          <Button>
            <Link href="/join/register">Sign Up</Link>
          </Button>

          <Button className="material-icons-outlined" variant={"outlineIcon"}>
            language
          </Button>
        </>
      )}
    </div>
  );
}
