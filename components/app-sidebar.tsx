"use client";

import {
  LayoutDashboard,
  Users,
  Truck,
  Package,
  DollarSign,
  Search,
  Bell,
  BarChart3,
  Monitor,
  FileText,
  LifeBuoy,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Users", icon: Users, href: "/users" },
  { label: "Drivers", icon: Truck, badge: "24", href: "/drivers" },
  { label: "Deliveries", icon: Package, href: "/deliveries" },
  { label: "Fare Management", icon: DollarSign, href: "/fare-management" },
  { label: "Disputes", icon: Search, href: "/disputes" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Monitoring", icon: Monitor, href: "/monitoring" },
  { label: "Content", icon: FileText, href: "/content" },
  { label: "Fraud Detection", icon: Truck, href: "/fraud-detection" },
];

const footerItems = [
  { label: "Support", icon: LifeBuoy, href: "/support" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={cn(
        "md:h-screen h-full bg-[#066A74] text-white flex flex-col transition-all duration-300 ease-in-out",
        isOpen ? "w-[260px]" : "w-16",
        "md:rounded-r-3xl"
      )}
    >
      {/* Top branding and toggle */}
      <div className="flex items-center justify-between p-4">
        {isOpen ? (
          <img
            src="/logo.png"
            alt="DeliverMee Logo"
            className="h-7 md:h-10 w-auto"
          />
        ) : (
          <span className="text-white font-bold text-xl">D</span> // Optional mini logo
        )}
        <button
          className="text-white text-sm md:block hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Nav Section */}
      <div className="flex-1 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={i}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2 text-left my-[2px] hover:bg-white hover:text-[#066A74]",
                    isActive
                      ? "bg-white text-[#066A74] font-semibold border-l-4 border-[#A7E3EA]"
                      : "text-white"
                  )}
                >
                  <item.icon size={18} />
                  {isOpen && (
                    <>
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge
                          className="ml-auto bg-red-500 text-white px-1.5 py-0.5 text-xs"
                          variant="secondary"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="px-2 py-4 border-t border-white/20">
        {footerItems.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={i}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 hover:bg-[#0D7C88]",
                  isActive
                    ? "bg-white text-[#066A74] font-semibold border-l-4 border-[#A7E3EA]"
                    : "text-white"
                )}
              >
                <item.icon size={18} />
                {isOpen && <span>{item.label}</span>}
              </Button>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
