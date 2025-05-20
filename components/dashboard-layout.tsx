"use client";

import type React from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 w-screen">
      {/* Sidebar - fixed width */}
      <div className="w-[260px] shrink-0">
        <AppSidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Optional: Top header */}
        <DashboardHeader />
        {/* Page content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
