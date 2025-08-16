"use client";
import { useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Login() {
  const { signIn } = useAuthActions();
  useEffect(() => {
    signIn("github");
  });

  return (
    <div className="w-full h-screen flex justify-center items-center gap-3">
      <LoaderCircle className="animate-spin text-primary" />
      Redirecting to GitHub
    </div>
  );
}
