"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Define dispute data type
type Dispute = {
  id: string;
  disputeId: string;
  user: string;
  reason: string;
  tripId: string;
  driver: string;
  submittedAt: string;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
};

// Sample dispute data
const sampleDispute: Dispute = {
  id: "1",
  disputeId: "D123",
  user: "John Doe",
  reason: "Driver was late and took a wrong route",
  tripId: "T456",
  driver: "John Doe",
  submittedAt: "2025-05-11 10:15 AM",
  status: "In Progress",
};

interface DisputeDetailsProps {
  disputeId: string;
}

export function DisputeDetails({ disputeId }: DisputeDetailsProps) {
  const [dispute, setDispute] = useState<Dispute | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string>("In Progress");
  const [resolutionNotes, setResolutionNotes] = useState<string>("");
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  useEffect(() => {
    // In a real application, you would fetch the dispute data from an API
    // For now, we'll just use the sample data
    setDispute(sampleDispute);
    setStatus(sampleDispute.status);
    setLoading(false);
  }, [disputeId]);

  if (loading) {
    return <div>Loading dispute details...</div>;
  }

  if (!dispute) {
    return <div>Dispute not found</div>;
  }

  const handleUpdateResolution = () => {
    console.log("Updating resolution:", { status, resolutionNotes });
    // In a real application, you would make an API call to update the dispute resolution
    // You could show a success toast here
  };

  const handleSendNotification = () => {
    console.log("Sending notification:", notificationMessage);
    // In a real application, you would make an API call to send the notification
    // You could show a success toast here
    setNotificationMessage("");
  };

  return (
    <div className="space-y-6">
      {/* Dispute Info */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">DISPUTE INFO</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 border rounded-md overflow-hidden">
            <div className="border-b md:border-b-0 md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Dispute ID
              </div>
              <div>{dispute.disputeId}</div>
            </div>
            <div className="border-b p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Trip ID
              </div>
              <div>{dispute.tripId}</div>
            </div>
            <div className="border-b md:border-b-0 md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">User</div>
              <div>{dispute.user}</div>
            </div>
            <div className="border-b p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Driver
              </div>
              <div>{dispute.driver}</div>
            </div>
            <div className="md:border-r p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Reason
              </div>
              <div>{dispute.reason}</div>
            </div>
            <div className="p-4">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Submitted At
              </div>
              <div>{dispute.submittedAt}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assign Resolution */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">
            ASSIGN RESOLUTION
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="status"
              className="text-sm font-medium text-gray-700"
            >
              Set Status
            </label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="resolutionNotes"
              className="text-sm font-medium text-gray-700"
            >
              Resolution Notes
            </label>
            <Textarea
              id="resolutionNotes"
              placeholder="Write Resolution"
              value={resolutionNotes}
              onChange={(e) => setResolutionNotes(e.target.value)}
              rows={4}
            />
          </div>

          <Button
            className="bg-teal-700 hover:bg-teal-800"
            onClick={handleUpdateResolution}
          >
            Update
          </Button>
        </CardContent>
      </Card>

      {/* Send Push Notification */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">
            SEND PUSH NOTIFICATION
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="notificationMessage"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <Textarea
              id="notificationMessage"
              placeholder="Write your message..."
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
              rows={4}
            />
          </div>

          <Button
            className="bg-teal-700 hover:bg-teal-800"
            onClick={handleSendNotification}
          >
            Send
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
