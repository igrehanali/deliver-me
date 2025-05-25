"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  ShieldCheck,
  CreditCard,
  BellRing,
  Link2,
  CheckCircle,
  Truck,
  Users,
} from "lucide-react";

import { AccountTab } from "./support/account-tab";
import { SecurityTab } from "./support/security-tab";
import { BillingTab } from "./support/billing-tab";
import { NotificationsTab } from "./support/notifications-tab";
import { ConnectionsTab } from "./support/connections-tab";
import { CheckrTable } from "./support/checkr-table";
import { StripeDriverTable } from "./support/stripe-driver-table";
import { StripeUserTable } from "./support/stripe-user-table";

interface SupportTabsProps {
  defaultTab?: string;
}

const tabConfig = [
  {
    value: "account",
    label: "Account",
    icon: User,
    content: <AccountTab />,
  },
  {
    value: "security",
    label: "Security",
    icon: ShieldCheck,
    content: <SecurityTab />,
  },
  {
    value: "billing",
    label: "Billing",
    icon: CreditCard,
    content: <BillingTab />,
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: BellRing,
    content: <NotificationsTab />,
  },
  {
    value: "connections",
    label: "Connections",
    icon: Link2,
    content: <ConnectionsTab />,
  },
  {
    value: "checker",
    label: "Checker",
    icon: CheckCircle,
    content: <CheckrTable />,
  },
  {
    value: "stripe-drivers",
    label: "Stripe Drivers",
    icon: Truck,
    content: <StripeDriverTable />,
  },
  {
    value: "stripe-users",
    label: "Stripe Users",
    icon: Users,
    content: <StripeUserTable />,
  },
];

export function SupportTabs({ defaultTab = "account" }: SupportTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Tabs
      defaultValue={defaultTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4 w-full mb-4 sm:mb-6 px-2 sm:px-0 md:h-auto h-40">
        {tabConfig.map(({ value, label, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex items-center gap-2 text-sm sm:text-base py-1"
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabConfig.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
