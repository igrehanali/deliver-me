"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

// Define connected account type
type ConnectedAccount = {
  id: string;
  name: string;
  description: string;
  connected: boolean;
  icon: string;
};

// Define social account type
type SocialAccount = {
  id: string;
  name: string;
  status: string;
  connected: boolean;
  icon: string;
};

// Initial connected accounts
const initialConnectedAccounts: ConnectedAccount[] = [
  {
    id: "google",
    name: "Google",
    description: "Calendar and contacts",
    connected: true,
    icon: "G",
  },
  {
    id: "mailchimp",
    name: "MailChimp",
    description: "Email marketing service",
    connected: true,
    icon: "M",
  },
];

// Initial social accounts
const initialSocialAccounts: SocialAccount[] = [
  {
    id: "facebook",
    name: "Facebook",
    status: "Not Connected",
    connected: false,
    icon: "F",
  },
  {
    id: "twitter",
    name: "Twitter",
    status: "Connected",
    connected: true,
    icon: "T",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    status: "Connected",
    connected: true,
    icon: "L",
  },
];

export function ConnectionsTab() {
  const [connectedAccounts, setConnectedAccounts] = useState<
    ConnectedAccount[]
  >(initialConnectedAccounts);
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>(
    initialSocialAccounts
  );

  // Handle toggle connected account
  const handleToggleConnectedAccount = (id: string, connected: boolean) => {
    setConnectedAccounts(
      connectedAccounts.map((account) => {
        if (account.id === id) {
          return { ...account, connected };
        }
        return account;
      })
    );
  };

  // Handle toggle social account
  const handleToggleSocialAccount = (id: string, connected: boolean) => {
    setSocialAccounts(
      socialAccounts.map((account) => {
        if (account.id === id) {
          return {
            ...account,
            connected,
            status: connected ? "Connected" : "Not Connected",
          };
        }
        return account;
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Connected Accounts */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-2">Connected Accounts</h3>
          <p className="text-sm text-gray-500 mb-6">
            Display content from your connected accounts on your site
          </p>

          <div className="space-y-4">
            {connectedAccounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">
                    {account.icon}
                  </div>
                  <div>
                    <p className="font-medium">{account.name}</p>
                    <p className="text-sm text-gray-500">
                      {account.description}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={account.connected}
                  onCheckedChange={(checked) =>
                    handleToggleConnectedAccount(account.id, checked)
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Accounts */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-2">Social Accounts</h3>
          <p className="text-sm text-gray-500 mb-6">
            Display content from social accounts on your site
          </p>

          <div className="space-y-4">
            {socialAccounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">
                    {account.icon}
                  </div>
                  <div>
                    <p className="font-medium">{account.name}</p>
                    <p className="text-sm text-gray-500">{account.status}</p>
                  </div>
                </div>
                <div>
                  {account.connected ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs bg-red-50 text-red-600 border-red-100 hover:bg-red-100 hover:text-red-700"
                      onClick={() =>
                        handleToggleSocialAccount(account.id, false)
                      }
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs"
                      onClick={() =>
                        handleToggleSocialAccount(account.id, true)
                      }
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
