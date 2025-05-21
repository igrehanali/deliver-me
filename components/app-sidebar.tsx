"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bell,
  ChevronLeft,
  FileText,
  HelpCircle,
  LayoutDashboard,
  MonitorSmartphone,
  Settings,
  ShieldAlert,
  Truck,
  Users,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Users", icon: Users, href: "/users" },
  { label: "Drivers", icon: Truck, href: "/drivers", badge: "24" },
  { label: "Deliveries", icon: Truck, href: "/deliveries" },
  { label: "Fare Management", icon: Wallet, href: "/fare-management" },
  { label: "Disputes", icon: ShieldAlert, href: "/disputes" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Monitoring", icon: MonitorSmartphone, href: "/monitoring" },
  { label: "Content", icon: FileText, href: "/content" },
];

const footerItems = [
  { label: "Support", icon: HelpCircle, href: "/support" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const renderMenuItem = ({
    label,
    icon: Icon,
    href,
    badge,
  }: {
    label: string;
    icon: React.ElementType;
    href: string;
    badge?: string;
  }) => {
    const active = isActive(href);
    const baseClasses = active
      ? "bg-white text-teal-800 "
      : "hover:bg-teal-700 text-white";

    return (
      <SidebarMenuItem key={label}>
        <SidebarMenuButton asChild isActive={active}>
          <Link
            href={href}
            className={`flex items-center gap-2 rounded px-3 py-2 ${baseClasses}`}
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icon className="h-5 w-5 shrink-0" />
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="group-[.collapsed]:block hidden"
                >
                  {label}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <span className="group-[.collapsed]:hidden">{label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar className="bg-[#076271] text-white border-none">
      {/* Header */}
      <div className="flex items-center justify-between p-4 h-16">
        <img src="/logo.png" alt="deliver me" className="h-6" />
      </div>

      {/* Main Menu */}
      <SidebarContent>
        <SidebarMenu>{menuItems.map(renderMenuItem)}</SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>{footerItems.map(renderMenuItem)}</SidebarMenu>
      </SidebarFooter>

      {/* Rail View */}
      <SidebarRail />
    </Sidebar>
  );
}
