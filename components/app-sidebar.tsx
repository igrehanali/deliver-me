// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   BarChart3,
//   Bell,
//   ChevronLeft,
//   FileText,
//   HelpCircle,
//   LayoutDashboard,
//   MonitorSmartphone,
//   Settings,
//   ShieldAlert,
//   Truck,
//   Users,
//   Wallet,
// } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarMenu,
//   SidebarMenuBadge,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// const menuItems = [
//   { label: "Dashboard", icon: LayoutDashboard, href: "/" },
//   { label: "Users", icon: Users, href: "/users" },
//   { label: "Drivers", icon: Truck, href: "/drivers", badge: "24" },
//   { label: "Deliveries", icon: Truck, href: "/deliveries" },
//   { label: "Fare Management", icon: Wallet, href: "/fare-management" },
//   { label: "Disputes", icon: ShieldAlert, href: "/disputes" },
//   { label: "Notifications", icon: Bell, href: "/notifications" },
//   { label: "Analytics", icon: BarChart3, href: "/analytics" },
//   { label: "Monitoring", icon: MonitorSmartphone, href: "/monitoring" },
//   { label: "Content", icon: FileText, href: "/content" },
// ];

// const footerItems = [
//   { label: "Support", icon: HelpCircle, href: "/support" },
//   { label: "Settings", icon: Settings, href: "/settings" },
// ];

// export function AppSidebar() {
//   const pathname = usePathname();

//   const isActive = (path: string) => pathname === path;

//   const renderMenuItem = ({
//     label,
//     icon: Icon,
//     href,
//     badge,
//   }: {
//     label: string;
//     icon: React.ElementType;
//     href: string;
//     badge?: string;
//   }) => {
//     const active = isActive(href);
//     const baseClasses = active
//       ? "bg-white text-teal-800 "
//       : "hover:bg-teal-700 text-white";

//     return (
//       <SidebarMenuItem key={label}>
//         <SidebarMenuButton asChild isActive={active}>
//           <Link
//             href={href}
//             className={`flex items-center gap-2 rounded px-3 py-2 ${baseClasses}`}
//           >
//             <TooltipProvider delayDuration={200}>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Icon className="h-5 w-5 shrink-0" />
//                 </TooltipTrigger>
//                 <TooltipContent
//                   side="right"
//                   className="group-[.collapsed]:block hidden"
//                 >
//                   {label}
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>

//             <span className="group-[.collapsed]:hidden">{label}</span>
//           </Link>
//         </SidebarMenuButton>
//       </SidebarMenuItem>
//     );
//   };

//   return (
//     <Sidebar className="bg-[#076271] text-white border-none">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 h-16">
//         <img src="/logo.png" alt="deliver me" className="h-6" />
//       </div>

//       {/* Main Menu */}
//       <SidebarContent>
//         <SidebarMenu>{menuItems.map(renderMenuItem)}</SidebarMenu>
//       </SidebarContent>

//       {/* Footer */}
//       <SidebarFooter>
//         <SidebarMenu>{footerItems.map(renderMenuItem)}</SidebarMenu>
//       </SidebarFooter>

//       {/* Rail View */}
//       <SidebarRail />
//     </Sidebar>
//   );
// }

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
        "h-screen bg-[#066A74] text-white flex flex-col justify-between rounded-r-3xl overflow-auto",
        isOpen ? "w-64" : "w-16",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <div>
        {/* Top branding and toggle */}
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold tracking-wide">
            {isOpen && (
              <img
                src="/logo.png"
                alt="DeliverMee Logo"
                className="h-10 mx-auto"
              />
            )}
          </span>
          <button
            className="text-white text-sm md:block hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        {/* Main nav */}
        <nav className="space-y-1 px-2">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <Link href={item.href} key={i}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2 text-left hover:bg-white hover:text-[#066A74] my-[2px]",
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

      {/* Footer nav */}
      <div className="space-y-1 px-2 pb-4">
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
