"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

// Define driver data type
type Driver = {
  id: string;
  name: string;
  status: "Online" | "Offline" | "On Trip";
  phone: string;
  vehicle: string;
  rating: number;
  email: string;
  documents: {
    driverLicense: {
      status: "Pending" | "Approved" | "Rejected";
    };
    vehicleRegistration: {
      status: "Pending" | "Approved" | "Rejected";
    };
  };
  earnings: {
    totalRides: number;
    lastPayout: {
      amount: string;
      date: string;
    };
    thisWeek: string;
    pending: string;
  };
};

// Sample driver data
const sampleDriver: Driver = {
  id: "1",
  name: "John Doe",
  status: "Online",
  phone: "+1 234 567 890",
  vehicle: "SUV",
  rating: 4.7,
  email: "ahmed.khan@rideshare.com",
  documents: {
    driverLicense: {
      status: "Pending",
    },
    vehicleRegistration: {
      status: "Approved",
    },
  },
  earnings: {
    totalRides: 122,
    lastPayout: {
      amount: "PKR 5,500",
      date: "2025-05-10",
    },
    thisWeek: "$3200",
    pending: "$200",
  },
};

interface DriverDetailsProps {
  driverId: string;
}

export function DriverDetails({ driverId }: DriverDetailsProps) {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [loading, setLoading] = useState(true);
  const [driverStatus, setDriverStatus] = useState<string>("Online");

  useEffect(() => {
    // In a real application, you would fetch the driver data from an API
    // For now, we'll just use the sample data
    setDriver(sampleDriver);
    setDriverStatus(sampleDriver.status);
    setLoading(false);
  }, [driverId]);

  if (loading) {
    return <div>Loading driver details...</div>;
  }

  if (!driver) {
    return <div>Driver not found</div>;
  }

  // Get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Online":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Online
          </Badge>
        );
      case "Offline":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Offline
          </Badge>
        );
      case "On Trip":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            On Trip
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            Pending
          </Badge>
        );
      case "Approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Approved
          </Badge>
        );
      case "Rejected":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Rejected
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const handleApproveDocument = (document: string) => {
    console.log(`Approving ${document}`);
    // In a real application, you would make an API call to approve the document
  };

  const handleRejectDocument = (document: string) => {
    console.log(`Rejecting ${document}`);
    // In a real application, you would make an API call to reject the document
  };

  const handleUpdateStatus = () => {
    console.log(`Updating status to ${driverStatus}`);
    // In a real application, you would make an API call to update the driver's status
  };

  return (
    <div className="space-y-6">
      {/* Driver Info */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">DRIVER INFO</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 border rounded-md overflow-hidden">
            <div className="border-b md:border-b-0 md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">Name</div>
              <div>{driver.name}</div>
            </div>
            <div className="border-b p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Vehicle
              </div>
              <div>{driver.vehicle}</div>
            </div>
            <div className="border-b md:border-b-0 md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Status
              </div>
              <div>{getStatusBadge(driver.status)}</div>
            </div>
            <div className="border-b p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Rating
              </div>
              <div className="flex items-center">
                {driver.rating}{" "}
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
              </div>
            </div>
            <div className="md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Phone
              </div>
              <div>{driver.phone}</div>
            </div>
            <div className="p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Email
              </div>
              <div>{driver.email}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Status */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">DOCUMENT STATUS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md overflow-hidden">
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 font-medium text-gray-500">Document</div>
              <div className="p-4 font-medium text-gray-500">Status</div>
              <div className="p-4 font-medium text-gray-500">Action</div>
            </div>
            <div className="grid grid-cols-3 border-b">
              <div className="p-4">Driver License</div>
              <div className="p-4">
                {getStatusBadge(driver.documents.driverLicense.status)}
              </div>
              <div className="p-4 flex gap-2">
                {driver.documents.driverLicense.status === "Pending" && (
                  <>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      size="sm"
                      onClick={() => handleApproveDocument("driverLicense")}
                    >
                      Approve
                    </Button>
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white"
                      size="sm"
                      onClick={() => handleRejectDocument("driverLicense")}
                    >
                      Reject
                    </Button>
                  </>
                )}
                {driver.documents.driverLicense.status !== "Pending" && "-"}
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="p-4">Vehicle Registration</div>
              <div className="p-4">
                {getStatusBadge(driver.documents.vehicleRegistration.status)}
              </div>
              <div className="p-4">-</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Earnings Summary */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">
            EARNINGS SUMMARY
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 border rounded-md overflow-hidden">
            <div className="border-b md:border-b-0 md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Total Rides
              </div>
              <div>{driver.earnings.totalRides}</div>
            </div>
            <div className="border-b p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                This Week
              </div>
              <div>{driver.earnings.thisWeek}</div>
            </div>
            <div className="md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Last Payout
              </div>
              <div>
                {driver.earnings.lastPayout.amount} (
                {driver.earnings.lastPayout.date})
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Pending
              </div>
              <div>{driver.earnings.pending}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Update */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">
            EARNINGS SUMMARY
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Select value={driverStatus} onValueChange={setDriverStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Offline">Offline</SelectItem>
                <SelectItem value="On Trip">On Trip</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={handleUpdateStatus}
            >
              Update
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
