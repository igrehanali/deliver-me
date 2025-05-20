"use client";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  const pathname = usePathname();

  // Function to get the current page title
  const getPageTitle = () => {
    const path = pathname.split("/").filter(Boolean)[0];
    if (!path) return "Overview";
    return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
  };

  // Function to generate breadcrumb
  const getBreadcrumb = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "Dashboard / Overview";

    return `Dashboard / ${getPageTitle()}`;
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-md">
      <div className="text-gray-500">{getBreadcrumb()}</div>
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-8 h-9 bg-gray-100 border-none"
          />
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
