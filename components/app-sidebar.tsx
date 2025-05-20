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
  }) => (
    <SidebarMenuItem key={label}>
      <SidebarMenuButton asChild isActive={isActive(href)}>
        <Link href={href} className="flex items-center gap-2">
          <Icon className="h-5 w-5 shrink-0" />
          <span className="group-[.collapsed]:hidden">{label}</span>
        </Link>
      </SidebarMenuButton>
      {badge && (
        <SidebarMenuBadge className="bg-red-500 text-white group-[.collapsed]:hidden">
          {badge}
        </SidebarMenuBadge>
      )}
    </SidebarMenuItem>
  );

  return (
    <Sidebar className="bg-teal-800 text-white border-none">
      {/* Header */}
      <div className="flex items-center justify-between p-4 h-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-teal-400">DELIVER</span>
          <span className="text-white">MEE</span>
        </Link>
        <SidebarTrigger className="text-white hover:text-teal-200">
          <ChevronLeft className="h-5 w-5" />
        </SidebarTrigger>
      </div>

      {/* Main Menu */}
      <SidebarContent>
        <SidebarMenu>{menuItems.map(renderMenuItem)}</SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>{footerItems.map(renderMenuItem)}</SidebarMenu>
      </SidebarFooter>

      {/* Sidebar Rail */}
      <SidebarRail />
    </Sidebar>
  );
}
