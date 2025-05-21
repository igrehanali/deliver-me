"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the dispute data type
type Dispute = {
  id: number;
  disputeId: string;
  deliveryId: string;
  user: string;
  driver: string;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
};

// Sample data
const disputeData: Dispute[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  disputeId: "DPT12345",
  deliveryId: "TRIP678",
  user: "John Doe",
  driver: "Alex Driver",
  status: i === 1 ? "In Progress" : "Open",
}));

export function DisputesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDisputes, setSelectedDisputes] = useState<number[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(disputeData.length / itemsPerPage);

  // Get current disputes
  const indexOfLastDispute = currentPage * itemsPerPage;
  const indexOfFirstDispute = indexOfLastDispute - itemsPerPage;
  const currentDisputes = disputeData.slice(
    indexOfFirstDispute,
    indexOfLastDispute
  );

  // Handle checkbox selection
  const handleSelectAll = () => {
    if (selectedDisputes.length === currentDisputes.length) {
      setSelectedDisputes([]);
    } else {
      setSelectedDisputes(currentDisputes.map((dispute) => dispute.id));
    }
  };

  const handleSelectDispute = (id: number) => {
    if (selectedDisputes.includes(id)) {
      setSelectedDisputes(
        selectedDisputes.filter((disputeId) => disputeId !== id)
      );
    } else {
      setSelectedDisputes([...selectedDisputes, id]);
    }
  };

  // Get status badge styling
  const getStatusBadge = (status: Dispute["status"]) => {
    switch (status) {
      case "Open":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Open
          </Badge>
        );
      case "In Progress":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            In Progress
          </Badge>
        );
      case "Resolved":
        return (
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
            Resolved
          </Badge>
        );
      case "Closed":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Closed
          </Badge>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-medium">Recent Disputes</CardTitle>
        <p className="text-sm text-gray-500">All the recent disputes</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Select defaultValue="disputeId">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="disputeId">Dispute ID</SelectItem>
                <SelectItem value="deliveryId">Delivery ID</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-1">
              <span>Export</span>
            </Button>
          </div>
        </div>

        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedDisputes.length === currentDisputes.length &&
                      currentDisputes.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Dispute ID</TableHead>
                <TableHead>Delivery ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentDisputes.map((dispute) => (
                <TableRow key={dispute.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedDisputes.includes(dispute.id)}
                      onCheckedChange={() => handleSelectDispute(dispute.id)}
                    />
                  </TableCell>
                  <TableCell>{dispute.disputeId}</TableCell>
                  <TableCell>{dispute.deliveryId}</TableCell>
                  <TableCell>{dispute.user}</TableCell>
                  <TableCell>{dispute.driver}</TableCell>
                  <TableCell>{getStatusBadge(dispute.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:text-blue-800"
                      >
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:text-blue-800"
                      >
                        Assign Resolution
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-teal-50 text-teal-700 border-teal-100 hover:bg-teal-100 hover:text-teal-800"
                      >
                        Notify
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstDispute + 1} to{" "}
            {Math.min(indexOfLastDispute, disputeData.length)} of{" "}
            {disputeData.length} entries
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
              </PaginationItem>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === pageNumber}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNumber);
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {totalPages > 5 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(totalPages);
                      }}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
