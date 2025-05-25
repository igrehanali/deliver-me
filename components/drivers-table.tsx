"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
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
import Link from "next/link";

// Define the driver data type
type Driver = {
  id: number;
  name: string;
  vehicleType: string;
  documentStatus: "Pending" | "Verified" | "In Review";
  availability: "Online" | "Offline";
  rating: number;
};

// Sample data
const driverData: Driver[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: "Alex John",
  vehicleType: "SUV",
  documentStatus: i === 0 ? "Pending" : i > 8 ? "In Review" : "Verified",
  availability: i === 0 || i > 8 ? "Offline" : "Online",
  rating: i === 0 || i > 8 ? 0 : 4.5,
}));

export function DriversTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDrivers, setSelectedDrivers] = useState<number[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(driverData.length / itemsPerPage);

  // Get current drivers
  const indexOfLastDriver = currentPage * itemsPerPage;
  const indexOfFirstDriver = indexOfLastDriver - itemsPerPage;
  const currentDrivers = driverData.slice(
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
  const getStatusBadge = (status: Driver["documentStatus"]) => {
    switch (status) {
      case "Pending":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            Pending
          </Badge>
        );
      case "Verified":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Verified
          </Badge>
        );
      case "In Review":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            In Review
          </Badge>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-medium">Recent Drivers</CardTitle>
        <p className="text-sm text-gray-500">All the recent drivers</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-4">
          <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search" className="pl-8" />
            </div>
            <Select defaultValue="name">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
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
                <TableHead>Driver Name</TableHead>
                <TableHead>Vehicle Type</TableHead>
                <TableHead>Document Status</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Ratings</TableHead>
                <TableHead className="text-right"></TableHead>
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
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.vehicleType}</TableCell>
                  <TableCell>{getStatusBadge(driver.documentStatus)}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="mr-1">{driver.availability}</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </TableCell>
                  <TableCell>{driver.rating}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/drivers/${driver.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-3 text-xs bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:text-blue-800"
                        >
                          View
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:text-blue-800"
                      >
                        History
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-teal-50 text-teal-700 border-teal-100 hover:bg-teal-100 hover:text-teal-800"
                      >
                        Support
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full sm:flex-row sm:items-center sm:justify-between">
          {/* Entry Info */}
          <div className="text-xs text-gray-500 text-center sm:text-left w-full sm:w-auto">
            Showing {indexOfFirstDriver + 1} to{" "}
            {Math.min(indexOfLastDriver, driverData.length)} of{" "}
            {driverData.length} entries
          </div>

          {/* Pagination Controls */}
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
