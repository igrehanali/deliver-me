"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { SiMailchimp, SiFacebook, SiLinkedin } from "react-icons/si";
import { FaTwitter, FaTwitterSquare } from "react-icons/fa";

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

const initialConnectedAccounts: ConnectedAccount[] = [
  {
    id: "google",
    name: "Google",
    description: "Calendar and contacts",
    connected: true,
    icon: "google",
  },
  {
    id: "mailchimp",
    name: "MailChimp",
    description: "Email marketing service",
    connected: true,
    icon: "mailchimp",
  },
];

const initialSocialAccounts: SocialAccount[] = [
  {
    id: "facebook",
    name: "Facebook",
    status: "Not Connected",
    connected: false,
    icon: "facebook",
  },
  {
    id: "twitter",
    name: "Twitter",
    status: "Connected",
    connected: true,
    icon: "twitter",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    status: "Connected",
    connected: true,
    icon: "linkedin",
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
  const renderIcon = (id: string) => {
    switch (id) {
      case "google":
        return <FcGoogle size={24} />;
      case "mailchimp":
        return <SiMailchimp size={20} className="text-yellow-600" />;
      case "facebook":
        return <SiFacebook size={20} className="text-blue-600" />;
      case "twitter":
        return <FaTwitterSquare size={20} className="text-blue-400" />;
      case "linkedin":
        return <SiLinkedin size={20} className="text-blue-700" />;
      default:
        return <div className="h-6 w-6 bg-gray-300 rounded-full" />;
    }
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
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {renderIcon(account.id)}
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
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {renderIcon(account.id)}
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
