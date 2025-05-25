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

// Define checkr data type
type CheckrEntry = {
  id: number;
  checkrId: string;
  reportId: string;
  driver: string;
  status: "Clear" | "Consider" | "Pending";
};

// Sample data
const checkrData: CheckrEntry[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  checkrId: "12345ABC",
  reportId: "John Doe",
  driver: "John Doe",
  status: i === 5 ? "Consider" : "Clear",
}));

export function CheckrTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEntries, setSelectedEntries] = useState<number[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(checkrData.length / itemsPerPage);

  // Get current entries
  const indexOfLastEntry = currentPage * itemsPerPage;
  const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
  const currentEntries = checkrData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Handle checkbox selection
  const handleSelectAll = () => {
    if (selectedEntries.length === currentEntries.length) {
      setSelectedEntries([]);
    } else {
      setSelectedEntries(currentEntries.map((entry) => entry.id));
    }
  };

  const handleSelectEntry = (id: number) => {
    if (selectedEntries.includes(id)) {
      setSelectedEntries(selectedEntries.filter((entryId) => entryId !== id));
    } else {
      setSelectedEntries([...selectedEntries, id]);
    }
  };

  // Get status badge styling
  const getStatusBadge = (status: CheckrEntry["status"]) => {
    switch (status) {
      case "Clear":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Clear
          </Badge>
        );
      case "Consider":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Consider
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
        <CardTitle className="text-lg font-medium">Recent Checkr</CardTitle>
        <p className="text-sm text-gray-500">All the recent checkr</p>
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

        <div className="rounded-md border overflow-hidden ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedEntries.length === currentEntries.length &&
                      currentEntries.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Checkr ID</TableHead>
                <TableHead>Checkr Report ID</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Checkr Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentEntries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedEntries.includes(entry.id)}
                      onCheckedChange={() => handleSelectEntry(entry.id)}
                    />
                  </TableCell>
                  <TableCell>{entry.checkrId}</TableCell>
                  <TableCell>{entry.reportId}</TableCell>
                  <TableCell>{entry.driver}</TableCell>
                  <TableCell>{getStatusBadge(entry.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full sm:flex-row sm:items-center sm:justify-between">
          {/* Entry Summary */}
          <div className="text-xs text-gray-500 text-center sm:text-left w-full sm:w-auto">
            Showing {indexOfFirstEntry + 1} to{" "}
            {Math.min(indexOfLastEntry, checkrData.length)} of{" "}
            {checkrData.length} entries
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
