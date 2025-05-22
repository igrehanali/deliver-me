"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Shield, CreditCard, Bell, Link } from "lucide-react";
import { AccountTab } from "./support/account-tab";
import { SecurityTab } from "./support/security-tab";
import { BillingTab } from "./support/billing-tab";
import { NotificationsTab } from "./support/notifications-tab";
import { ConnectionsTab } from "./support/connections-tab";

interface SupportTabsProps {
  defaultTab?: string;
}

export function SupportTabs({ defaultTab = "account" }: SupportTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Tabs
      defaultValue={defaultTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      {/* Responsive TabsList */}
      <TabsList className="flex flex-wrap sm:grid sm:grid-cols-5 gap-2 sm:gap-0 overflow-x-auto scrollbar-hide mb-4 sm:mb-6 px-2 sm:px-0">
        <TabsTrigger
          value="account"
          className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <User className="h-4 w-4" />
          <span>Account</span>
        </TabsTrigger>
        <TabsTrigger
          value="security"
          className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <Shield className="h-4 w-4" />
          <span>Security</span>
        </TabsTrigger>
        <TabsTrigger
          value="billing"
          className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <CreditCard className="h-4 w-4" />
          <span>Billing</span>
        </TabsTrigger>
        <TabsTrigger
          value="notifications"
          className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
        </TabsTrigger>
        <TabsTrigger
          value="connections"
          className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <Link className="h-4 w-4" />
          <span>Connections</span>
        </TabsTrigger>
      </TabsList>

      {/* Tab Content */}
      <TabsContent value="account">
        <AccountTab />
      </TabsContent>
      <TabsContent value="security">
        <SecurityTab />
      </TabsContent>
      <TabsContent value="billing">
        <BillingTab />
      </TabsContent>
      <TabsContent value="notifications">
        <NotificationsTab />
      </TabsContent>
      <TabsContent value="connections">
        <ConnectionsTab />
      </TabsContent>
    </Tabs>
  );
}
