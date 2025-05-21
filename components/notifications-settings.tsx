"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define notification types
type NotificationType = {
  id: string;
  label: string;
  email: boolean;
  browser: boolean;
  app: boolean;
};

// Initial notification preferences
const initialNotifications: NotificationType[] = [
  { id: "new", label: "New for you", email: true, browser: false, app: false },
  {
    id: "activity",
    label: "Account activity",
    email: false,
    browser: true,
    app: false,
  },
  {
    id: "browser",
    label: "A new browser used to sign in",
    email: false,
    browser: false,
    app: true,
  },
  {
    id: "device",
    label: "A new device is linked",
    email: false,
    browser: true,
    app: false,
  },
];

export function NotificationsSettings() {
  // State for notification preferences
  const [notifications, setNotifications] =
    useState<NotificationType[]>(initialNotifications);
  const [notificationTiming, setNotificationTiming] = useState("online");
  const [sendTo, setSendTo] = useState("all");
  const [message, setMessage] = useState("");

  // Handle checkbox changes
  const handleCheckboxChange = (
    id: string,
    channel: "email" | "browser" | "app",
    checked: boolean
  ) => {
    setNotifications(
      notifications.map((notification) => {
        if (notification.id === id) {
          return { ...notification, [channel]: checked };
        }
        return notification;
      })
    );
  };

  // Handle save changes
  const handleSaveChanges = () => {
    // Here you would typically make an API call to save the notification preferences
    console.log(
      "Saving notification preferences:",
      notifications,
      notificationTiming
    );
    // You could show a success toast here
  };

  // Handle send notification
  const handleSendNotification = () => {
    // Here you would typically make an API call to send the notification
    console.log("Sending notification to:", sendTo, "Message:", message);
    // You could show a success toast here
    setMessage("");
  };

  return (
    <div className="space-y-6">
      {/* Notification Preferences */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Recent Devices</CardTitle>
          <p className="text-sm text-gray-500">
            We need permission from your browser to show notifications.{" "}
            <Button variant="link" className="p-0 h-auto text-[#F8B179]">
              Request Permission
            </Button>
          </p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">TYPE</TableHead>
                <TableHead className="text-center">EMAIL</TableHead>
                <TableHead className="text-center">BROWSER</TableHead>
                <TableHead className="text-center">APP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell>{notification.label}</TableCell>
                  <TableCell className="text-center">
                    <Checkbox
                      checked={notification.email}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(
                          notification.id,
                          "email",
                          checked as boolean
                        )
                      }
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox
                      checked={notification.browser}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(
                          notification.id,
                          "browser",
                          checked as boolean
                        )
                      }
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox
                      checked={notification.app}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(
                          notification.id,
                          "app",
                          checked as boolean
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="timing"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                When should we send you notifications?
              </label>
              <Select
                value={notificationTiming}
                onValueChange={setNotificationTiming}
              >
                <SelectTrigger className="w-full md:w-[300px]">
                  <SelectValue placeholder="Select timing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Only when I'm online</SelectItem>
                  <SelectItem value="always">Always</SelectItem>
                  <SelectItem value="scheduled">
                    During scheduled hours
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
              <Button variant="outline">Discard</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Push Notification */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">
            Push Notification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label
              htmlFor="sendTo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Send to
            </label>
            <Select value={sendTo} onValueChange={setSendTo}>
              <SelectTrigger className="w-full md:w-[300px]">
                <SelectValue placeholder="Select recipients" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="drivers">All Drivers</SelectItem>
                <SelectItem value="active">Active Users</SelectItem>
                <SelectItem value="inactive">Inactive Users</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          <div>
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={handleSendNotification}
            >
              Send Notification
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
