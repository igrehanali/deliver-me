import type React from "react";
import Link from "next/link";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-screen">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
            <img
              src="/logo.png"
              alt="DeliverMee Logo"
              className="h-10 mx-auto"
            />
        </div>
        {children}
      </div>
    </div>
  );
}
