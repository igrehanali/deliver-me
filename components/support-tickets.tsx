"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define ticket data type
type Ticket = {
  id: string;
  title: string;
  user: string;
  userType: "User" | "Driver";
  status: "New" | "In Progress" | "Resolved" | "Closed";
  description: string;
  assignedTo: string;
};

// Sample ticket data
const ticketData: Ticket[] = [
  {
    id: "#1124",
    title: "App crash on login",
    user: "John Doe",
    userType: "User",
    status: "New",
    description:
      "When I try to log in with Google, the app crashes immediately on my Android device.",
    assignedTo: "",
  },
  {
    id: "#1125",
    title: "Delivery location issue",
    user: "Ali Khan",
    userType: "Driver",
    status: "In Progress",
    description:
      "The delivery location on the map is different from the actual address provided.",
    assignedTo: "Support Team",
  },
  {
    id: "#1126",
    title: "Payment not processed",
    user: "Sarah Ali",
    userType: "User",
    status: "Resolved",
    description:
      "My payment was charged but the order shows as unpaid in the app.",
    assignedTo: "Billing Team",
  },
];

export function SupportTickets() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(ticketData[0]);
  const [ticketStatus, setTicketStatus] = useState<string>(
    selectedTicket.status
  );
  const [assignedTo, setAssignedTo] = useState<string>(
    selectedTicket.assignedTo || "Unassigned"
  );

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setTicketStatus(ticket.status);
    setAssignedTo(ticket.assignedTo || "Unassigned");
  };

  const handleUpdateTicket = () => {
    // Here you would typically make an API call to update the ticket
    console.log("Updating ticket:", {
      ...selectedTicket,
      status: ticketStatus,
      assignedTo: assignedTo === "Unassigned" ? "" : assignedTo,
    });
    // You could show a success toast here
  };

  return (
    <div className="space-y-6">
      {/* Support Inbox */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Support Inbox</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ticketData.map((ticket) => (
              <div
                key={ticket.id}
                className={`p-4 border rounded-md cursor-pointer hover:bg-gray-50 ${
                  selectedTicket.id === ticket.id
                    ? "border-teal-500 bg-teal-50"
                    : ""
                }`}
                onClick={() => handleTicketClick(ticket)}
              >
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">
                      {ticket.id} - {ticket.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {ticket.userType === "User" ? "User: " : "Driver: "}
                      {ticket.user} {getStatusBadge(ticket.status)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ticket Details */}
      {selectedTicket && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Ticket {selectedTicket.id} - {selectedTicket.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="font-medium mb-1">Submitted by:</div>
                <div>
                  {selectedTicket.user} ({selectedTicket.userType})
                </div>
              </div>

              <div>
                <div className="font-medium mb-1">Issue:</div>
                <div>{selectedTicket.description}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="status" className="font-medium block">
                    Status
                  </label>
                  <Select value={ticketStatus} onValueChange={setTicketStatus}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="assignTo" className="font-medium block">
                    Assign to
                  </label>
                  <Select value={assignedTo} onValueChange={setAssignedTo}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Unassigned">Unassigned</SelectItem>
                      <SelectItem value="Support Team">Support Team</SelectItem>
                      <SelectItem value="Technical Team">
                        Technical Team
                      </SelectItem>
                      <SelectItem value="Billing Team">Billing Team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  className="bg-teal-700 hover:bg-teal-800"
                  onClick={handleUpdateTicket}
                >
                  Update Ticket
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Helper function to render status badge
function getStatusBadge(status: string) {
  let badgeClass = "";

  switch (status) {
    case "New":
      badgeClass = "bg-blue-100 text-blue-800";
      break;
    case "In Progress":
      badgeClass = "bg-yellow-100 text-yellow-800";
      break;
    case "Resolved":
      badgeClass = "bg-green-100 text-green-800";
      break;
    case "Closed":
      badgeClass = "bg-gray-100 text-gray-800";
      break;
  }

  return (
    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${badgeClass}`}>
      {status}
    </span>
  );
}
