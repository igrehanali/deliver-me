"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertTriangle, CreditCard } from "lucide-react";
import Link from "next/link";

// Define fraud alert type
type FraudAlert = {
  id: string;
  type: "unusual-ip" | "payment-behavior";
  title: string;
  description: string;
  lastFlagged: string;
  severity: "high" | "medium" | "low";
};

// Define flagged user type
type FlaggedUser = {
  id: string;
  user: string;
  issue: string;
  location: string;
  flaggedAt: string;
  issueType: "ip" | "payment";
};

// Sample fraud alerts
const fraudAlerts: FraudAlert[] = [
  {
    id: "1",
    type: "unusual-ip",
    title: "Unusual IP Activity",
    description:
      "Multiple deliveries booked from the same IP in different cities.",
    lastFlagged: "2 hours ago",
    severity: "high",
  },
  {
    id: "2",
    type: "payment-behavior",
    title: "Abnormal Payment Behavior",
    description: "Frequent failed payment attempts from user accounts.",
    lastFlagged: "30 mins ago",
    severity: "medium",
  },
];

// Sample flagged users
const flaggedUsers: FlaggedUser[] = [
  {
    id: "1",
    user: "John Doe",
    issue: "Multiple trips from same IP",
    location: "Lahore",
    flaggedAt: "2025-05-06 14:23",
    issueType: "ip",
  },
  {
    id: "2",
    user: "John Doe",
    issue: "Payment abuse flagged",
    location: "Lahore",
    flaggedAt: "2025-05-06 14:23",
    issueType: "payment",
  },
];

export function FraudDetectionDashboard() {
  const [alerts] = useState<FraudAlert[]>(fraudAlerts);
  const [users] = useState<FlaggedUser[]>(flaggedUsers);

  const handleViewUser = (userId: string) => {
    console.log("Viewing user:", userId);
    // In a real application, you would navigate to the user details page
  };

  const handleFlagAgain = (userId: string) => {
    console.log("Flagging user again:", userId);
    // In a real application, you would make an API call to flag the user again
  };

  const handleRemoveFlag = (userId: string) => {
    console.log("Removing flag for user:", userId);
    // In a real application, you would make an API call to remove the flag
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "unusual-ip":
        return <AlertTriangle className="h-5 w-5" />;
      case "payment-behavior":
        return <CreditCard className="h-5 w-5" />;
      default:
        return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getAlertBgColor = (type: string) => {
    switch (type) {
      case "unusual-ip":
        return "bg-orange-50 border-orange-200";
      case "payment-behavior":
        return "bg-green-50 border-green-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getAlertTextColor = (type: string) => {
    switch (type) {
      case "unusual-ip":
        return "text-orange-800";
      case "payment-behavior":
        return "text-green-800";
      default:
        return "text-gray-800";
    }
  };

  const getIssueTextColor = (issueType: string) => {
    switch (issueType) {
      case "ip":
        return "text-red-600";
      case "payment":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Fraud Alerts */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className={`border ${getAlertBgColor(alert.type)}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={getAlertTextColor(alert.type)}>
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-medium ${getAlertTextColor(
                      alert.type
                    )} mb-1`}
                  >
                    {alert.title}
                  </h3>
                  <p
                    className={`text-sm ${getAlertTextColor(alert.type)} mb-2`}
                  >
                    {alert.description}
                  </p>
                  <p
                    className={`text-xs ${getAlertTextColor(
                      alert.type
                    )} opacity-75`}
                  >
                    Last flagged: {alert.lastFlagged}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Flagged Users */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Flagged Users</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Flagged At</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.user}</TableCell>
                  <TableCell>
                    <span className={getIssueTextColor(user.issueType)}>
                      {user.issue}
                    </span>
                  </TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{user.flaggedAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href={`/fraud-detection/${user.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-3 text-xs bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:text-blue-800"
                          onClick={() => handleViewUser(user.id)}
                        >
                          View
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-100 hover:text-orange-800"
                        onClick={() => handleFlagAgain(user.id)}
                      >
                        Flag Again
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-red-50 text-red-700 border-red-100 hover:bg-red-100 hover:text-red-800"
                        onClick={() => handleRemoveFlag(user.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
