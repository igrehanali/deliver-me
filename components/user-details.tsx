"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define user data type
type User = {
  id: string;
  name: string;
  email: string;
  signupMethod: string;
  totalRides: number;
  phone: string;
  status: "Active" | "Inactive" | "Suspended";
};

// Sample user data
const sampleUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  signupMethod: "Social-Google",
  totalRides: 45,
  phone: "+1 234 567 890",
  status: "Active",
};

interface UserDetailsProps {
  userId: string;
}

export function UserDetails({ userId }: UserDetailsProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the user data from an API
    // For now, we'll just use the sample data
    setUser(sampleUser);
    setLoading(false);
  }, [userId]);

  if (loading) {
    return <div>Loading user details...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  // Get status badge styling
  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "Active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Active
          </Badge>
        );
      case "Inactive":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Inactive
          </Badge>
        );
      case "Suspended":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Suspended
          </Badge>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">USER INFO</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 border rounded-md overflow-hidden">
          <div className="border-b md:border-b-0 md:border-r p-4">
            <div className="text-sm font-medium text-gray-500 mb-1">Name</div>
            <div>{user.name}</div>
          </div>
          <div className="border-b p-4">
            <div className="text-sm font-medium text-gray-500 mb-1">Email</div>
            <div>{user.email}</div>
          </div>
          <div className="border-b md:border-b-0 md:border-r p-4">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Signup Method:
            </div>
            <div>{user.signupMethod}</div>
          </div>
          <div className="border-b p-4">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Total Rides:
            </div>
            <div>{user.totalRides}</div>
          </div>
          <div className="md:border-r p-4">
            <div className="text-sm font-medium text-gray-500 mb-1">Phone</div>
            <div>{user.phone}</div>
          </div>
          <div className="p-4">
            <div className="text-sm font-medium text-gray-500 mb-1">Status</div>
            <div>{getStatusBadge(user.status)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
