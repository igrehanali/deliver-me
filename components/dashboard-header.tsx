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
    <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-6 ">
      <div className="text-gray-500 text-sm md:text-base truncate max-w-[50vw] sm:max-w-xs ">
        <div className="md:block hidden">{getBreadcrumb()}</div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative w-36 sm:w-48 md:w-64 hidden xs:block">
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
          <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
