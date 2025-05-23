"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define flagged user detail type
type FlaggedUserDetail = {
  id: string;
  user: string;
  issue: string;
  location: string;
  flaggedAt: string;
};

// Sample flagged user detail data
const sampleFlaggedUser: FlaggedUserDetail = {
  id: "1",
  user: "John Doe",
  issue: "Multiple trips from same IP",
  location: "Lahore",
  flaggedAt: "2025-05-06 14:23",
};

interface FlaggedUserDetailProps {
  userId: string;
}

export function FlaggedUserDetail({ userId }: FlaggedUserDetailProps) {
  const router = useRouter();
  const [flaggedUser, setFlaggedUser] = useState<FlaggedUserDetail | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the flagged user data from an API
    // For now, we'll just use the sample data
    setFlaggedUser(sampleFlaggedUser);
    setLoading(false);
  }, [userId]);

  if (loading) {
    return <div>Loading flagged user details...</div>;
  }

  if (!flaggedUser) {
    return <div>Flagged user not found</div>;
  }

  const handleClose = () => {
    // Navigate back to the fraud detection page
    router.push("/fraud-detection");
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">DISPUTE INFO</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
            <div className="text-sm font-medium text-gray-500">User</div>
            <div className="col-span-2">{flaggedUser.user}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
            <div className="text-sm font-medium text-gray-500">Issue</div>
            <div className="col-span-2">{flaggedUser.issue}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
            <div className="text-sm font-medium text-gray-500">Location</div>
            <div className="col-span-2">{flaggedUser.location}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-3">
            <div className="text-sm font-medium text-gray-500">Flagged At</div>
            <div className="col-span-2">{flaggedUser.flaggedAt}</div>
          </div>
        </div>

        <div className="pt-4">
          <Button
            className="bg-teal-700 hover:bg-teal-800"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
