"use client";

import { AuthProvider } from "@/context/auth/AuthContext";

import Auth from "@/app/components/auth/Auth";

export default function Home() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}
