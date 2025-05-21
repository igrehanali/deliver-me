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
      <TabsList className="grid grid-cols-5 mb-6">
        <TabsTrigger value="account" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Account</span>
        </TabsTrigger>
        <TabsTrigger value="security" className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span>Security</span>
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          <span>Billing & Plans</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
        </TabsTrigger>
        <TabsTrigger value="connections" className="flex items-center gap-2">
          <Link className="h-4 w-4" />
          <span>Connections</span>
        </TabsTrigger>
      </TabsList>
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
