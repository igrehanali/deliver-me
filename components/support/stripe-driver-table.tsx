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

// Define stripe driver data type
type StripeDriver = {
  id: number;
  deliveryId: string;
  stripeId: string;
  driver: string;
  paymentStatus: "Paid" | "Clear" | "Pending";
};

// Sample data
const stripeDriverData: StripeDriver[] = [
  ...Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    deliveryId: "DLV-001",
    stripeId: "STRP-123ABC",
    driver: "John Doe",
    paymentStatus: "Paid" as const,
  })),
  {
    id: 5,
    deliveryId: "12345ABC",
    stripeId: "John Doe",
    driver: "John Doe",
    paymentStatus: "Clear" as const,
  },
  ...Array.from({ length: 45 }, (_, i) => ({
    id: i + 6,
    deliveryId: "DLV-001",
    stripeId: "STRP-123ABC",
    driver: "John Doe",
    paymentStatus: "Paid" as const,
  })),
];

export function StripeDriverTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDrivers, setSelectedDrivers] = useState<number[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(stripeDriverData.length / itemsPerPage);

  // Get current drivers
  const indexOfLastDriver = currentPage * itemsPerPage;
  const indexOfFirstDriver = indexOfLastDriver - itemsPerPage;
  const currentDrivers = stripeDriverData.slice(
    indexOfFirstDriver,
    indexOfLastDriver
  );

  // Handle checkbox selection
  const handleSelectAll = () => {
    if (selectedDrivers.length === currentDrivers.length) {
      setSelectedDrivers([]);
    } else {
      setSelectedDrivers(currentDrivers.map((driver) => driver.id));
    }
  };

  const handleSelectDriver = (id: number) => {
    if (selectedDrivers.includes(id)) {
      setSelectedDrivers(selectedDrivers.filter((driverId) => driverId !== id));
    } else {
      setSelectedDrivers([...selectedDrivers, id]);
    }
  };

  // Get status badge styling
  const getStatusBadge = (status: StripeDriver["paymentStatus"]) => {
    switch (status) {
      case "Paid":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Paid
          </Badge>
        );
      case "Clear":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Clear
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            Pending
          </Badge>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-medium">Stripe-Driver</CardTitle>
        <p className="text-sm text-gray-500">All the Stripe-Driver</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Select defaultValue="name">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="id">ID</SelectItem>
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
                      selectedDrivers.length === currentDrivers.length &&
                      currentDrivers.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Delivery ID</TableHead>
                <TableHead>Stripe ID</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Payment Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedDrivers.includes(driver.id)}
                      onCheckedChange={() => handleSelectDriver(driver.id)}
                    />
                  </TableCell>
                  <TableCell>{driver.deliveryId}</TableCell>
                  <TableCell>{driver.stripeId}</TableCell>
                  <TableCell>{driver.driver}</TableCell>
                  <TableCell>{getStatusBadge(driver.paymentStatus)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full sm:flex-row sm:items-center sm:justify-between">
          {/* Entry summary */}
          <div className="text-xs text-gray-500 text-center sm:text-left w-full sm:w-auto">
            Showing {indexOfFirstDriver + 1} to{" "}
            {Math.min(indexOfLastDriver, stripeDriverData.length)} of{" "}
            {stripeDriverData.length} entries
          </div>

          {/* Pagination */}
          <div className="flex justify-center sm:justify-end w-full overflow-x-auto">
            <Pagination>
              <PaginationContent className="flex flex-wrap justify-center sm:justify-end gap-1 text-xs">
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
                    <PaginationItem className="hidden xs:inline">
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem className="hidden xs:inline">
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
        </div>
      </CardContent>
    </Card>
  );
}
