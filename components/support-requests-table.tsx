"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Define support request data type
type SupportRequest = {
  id: string
  issue: string
  status: "Open" | "In Progress" | "Resolved" | "Closed"
  assignedTo: string
}

// Sample support request data
const initialSupportRequests: SupportRequest[] = [
  {
    id: "REQ-982",
    issue: "Payment not processed",
    status: "In Progress",
    assignedTo: "Agent Ali",
  },
  {
    id: "REQ-982",
    issue: "Payment not processed",
    status: "Resolved",
    assignedTo: "Agent Sara",
  },
]

export function SupportRequestsTable() {
  const [supportRequests] = useState<SupportRequest[]>(initialSupportRequests)

  // Get status badge styling
  const getStatusBadge = (status: SupportRequest["status"]) => {
    switch (status) {
      case "Open":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Open</Badge>
      case "In Progress":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">In Progress</Badge>
      case "Resolved":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Resolved</Badge>
      case "Closed":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Closed</Badge>
    }
  }

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">REQUEST ID</TableHead>
              <TableHead>ISSUE</TableHead>
              <TableHead className="w-[150px]">STATUS</TableHead>
              <TableHead className="w-[150px]">ASSIGNED TO</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supportRequests.map((request, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.issue}</TableCell>
                <TableCell>{getStatusBadge(request.status)}</TableCell>
                <TableCell>{request.assignedTo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
