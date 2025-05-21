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
import { Checkbox } from "@/components/ui/checkbox";
import { InfoIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AccountTab() {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    organization: "Pixivent",
    phone: "202 555 0111",
    address: "Address",
    province: "California",
    postalCode: "23456",
    country: "",
    language: "",
    timezone: "",
    currency: "",
  });

  const [confirmDeactivation, setConfirmDeactivation] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    // Here you would typically make an API call to save the profile data
    console.log("Saving profile data:", profileData);
    // You could show a success toast here
  };

  const handleDeactivateAccount = () => {
    if (confirmDeactivation) {
      // Here you would typically make an API call to deactivate the account
      console.log("Deactivating account");
      // You could show a success toast and redirect to logout
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Photo */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://i.pravatar.cc/160" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <InfoIcon className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-medium">
                  External Services Info
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-teal-700 hover:bg-teal-800">
                  Upload New Photo
                </Button>
                <Button variant="outline">Reset</Button>
              </div>
              <p className="text-xs text-gray-500">
                Allowed JPG, GIF or PNG. Max size of 800K
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Input
                id="firstName"
                value={profileData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                value={profileData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="organization" className="text-sm font-medium">
                Organization
              </label>
              <Input
                id="organization"
                value={profileData.organization}
                onChange={(e) =>
                  handleInputChange("organization", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium">
                Address
              </label>
              <Input
                id="address"
                value={profileData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="province" className="text-sm font-medium">
                Province
              </label>
              <Input
                id="province"
                value={profileData.province}
                onChange={(e) => handleInputChange("province", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="postalCode" className="text-sm font-medium">
                Postal Code
              </label>
              <Input
                id="postalCode"
                value={profileData.postalCode}
                onChange={(e) =>
                  handleInputChange("postalCode", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium">
                Country
              </label>
              <Select
                value={profileData.country}
                onValueChange={(value) => handleInputChange("country", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="language" className="text-sm font-medium">
                Language
              </label>
              <Select
                value={profileData.language}
                onValueChange={(value) => handleInputChange("language", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="timezone" className="text-sm font-medium">
                Time Zone
              </label>
              <Select
                value={profileData.timezone}
                onValueChange={(value) => handleInputChange("timezone", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="est">Eastern Time (ET)</SelectItem>
                  <SelectItem value="cst">Central Time (CT)</SelectItem>
                  <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                  <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="currency" className="text-sm font-medium">
                Currency
              </label>
              <Select
                value={profileData.currency}
                onValueChange={(value) => handleInputChange("currency", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
            <Button variant="outline" className="ml-2">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Delete Account */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Delete Account</h3>
          <div className="bg-orange-100 border border-orange-200 rounded-md p-4 mb-4">
            <p className="text-orange-800 font-medium">
              Are you sure you want to delete your account?
            </p>
            <p className="text-orange-700 text-sm">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Checkbox
              id="confirmDeactivation"
              checked={confirmDeactivation}
              onCheckedChange={(checked) =>
                setConfirmDeactivation(checked as boolean)
              }
            />
            <label htmlFor="confirmDeactivation" className="text-sm">
              I confirm my account deactivation
            </label>
          </div>
          <Button
            variant="destructive"
            className="bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700"
            onClick={handleDeactivateAccount}
            disabled={!confirmDeactivation}
          >
            Deactivate account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
