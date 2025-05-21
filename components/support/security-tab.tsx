"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, Copy } from "lucide-react";

export function SecurityTab() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [apiKeyName, setApiKeyName] = useState("");
  const [apiKeyType, setApiKeyType] = useState("");

  const apiKeys = [
    {
      id: 1,
      name: "Server Key 1",
      key: "23eaf710-f4f7-435e-8c8e-1ee32512823c",
      access: "Full Access",
      created: "Created on 28 Apr 2021, 18:20 GTM+4:30",
    },
    {
      id: 2,
      name: "Server Key 2",
      key: "23eaf710-f4f7-435e-8c8e-1ee32512823c",
      access: "Full Access",
      created: "Created on 28 Apr 2021, 18:20 GTM+4:30",
    },
    {
      id: 3,
      name: "Server Key 3",
      key: "23eaf710-f4f7-435e-8c8e-1ee32512823c",
      access: "Full Access",
      created: "Created on 28 Apr 2021, 18:20 GTM+4:30",
    },
  ];

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSavePassword = () => {
    // Here you would typically make an API call to change the password
    console.log("Changing password:", passwordData);
    // You could show a success toast here
  };

  const handleCreateApiKey = () => {
    // Here you would typically make an API call to create an API key
    console.log("Creating API key:", { name: apiKeyName, type: apiKeyType });
    // You could show a success toast here
  };

  const handleCopyApiKey = (key: string) => {
    navigator.clipboard.writeText(key);
    // You could show a success toast here
  };

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Change Password</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="currentPassword" className="text-sm font-medium">
                Current Password
              </label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    handlePasswordChange("currentPassword", e.target.value)
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="newPassword" className="text-sm font-medium">
                  New Password
                </label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      handlePasswordChange("newPassword", e.target.value)
                    }
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      handlePasswordChange("confirmPassword", e.target.value)
                    }
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Password Requirements:</h4>
              <ul className="text-sm text-gray-500 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                  <span>Minimum 8 characters long - the more, the better</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                  <span>At least one lowercase character</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                  <span>
                    At least one number, symbol, or whitespace character
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex gap-2">
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={handleSavePassword}
              >
                Save Changes
              </Button>
              <Button variant="outline">Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two-steps verification */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Two-steps verification</h3>
          <p className="text-sm text-gray-500 mb-2">
            Two factor authentication is not enabled yet.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Two-factor authentication adds an additional layer of security to
            your account by requiring more than just a password to log in.{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-teal-600 hover:text-teal-700"
            >
              Learn more.
            </Button>
          </p>
          <Button className="bg-teal-700 hover:bg-teal-800">
            Enable two-factor authentication
          </Button>
        </CardContent>
      </Card>

      {/* Create an API key */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Create an API key</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="apiKeyType" className="text-sm font-medium">
                Choose the Api Key type you want to create
              </label>
              <Select value={apiKeyType} onValueChange={setApiKeyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Key Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Access</SelectItem>
                  <SelectItem value="read">Read Only</SelectItem>
                  <SelectItem value="write">Write Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="apiKeyName" className="text-sm font-medium">
                Name the API key
              </label>
              <Input
                id="apiKeyName"
                placeholder="Server key 1"
                value={apiKeyName}
                onChange={(e) => setApiKeyName(e.target.value)}
              />
            </div>

            <Button
              className="w-full bg-teal-700 hover:bg-teal-800"
              onClick={handleCreateApiKey}
            >
              Create key
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* API Key List & Access */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">API Key List & Access</h3>
          <p className="text-sm text-gray-500 mb-4">
            An API key is a simple encrypted string that identifies an
            application without any principal. They are useful for accessing
            public data anonymously, and are used to associate API requests with
            your project for quota and billing.
          </p>

          <div className="space-y-4">
            {apiKeys.map((apiKey) => (
              <div key={apiKey.id} className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{apiKey.name}</h4>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {apiKey.key}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopyApiKey(apiKey.key)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {apiKey.access}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{apiKey.created}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
