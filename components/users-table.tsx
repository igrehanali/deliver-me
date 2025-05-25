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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

// Define the user data type
type User = {
  id: number;
  name: string;
  email: string;
  signUpMethod: "Email" | "Phone" | "Google";
  totalDeliveries: number;
  avatar: string;
};

// Sample data
const userData: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: "Alex John",
  email: "alex@gmail.com",
  signUpMethod: i === 1 ? "Phone" : i === 3 ? "Google" : "Email",
  totalDeliveries: i === 2 ? 102 : i === 1 ? 45 : 15,
  avatar: "https://i.pravatar.cc/32?u=" + (i + 1),
}));

export function UsersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  // Get current users
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  // Handle checkbox selection
  const handleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map((user) => user.id));
    }
  };

  const handleSelectUser = (id: number) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-medium">Recent Users</CardTitle>
        <p className="text-sm text-gray-500">All the recent users</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-4 w-full">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-8 w-full" />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
            <Select defaultValue="name">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="deliveries">Deliveries</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="flex items-center gap-1 w-full sm:w-auto"
            >
              <span>Export</span>
            </Button>
          </div>
        </div>

        <div className="rounded-md border overflow-x-auto ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedUsers.length === currentUsers.length &&
                      currentUsers.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Sign-Up Method</TableHead>
                <TableHead>Total Deliveries</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={() => handleSelectUser(user.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                        />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="truncate max-w-[100px]">
                        {user.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="truncate block max-w-[120px]">
                      {user.email}
                    </span>
                  </TableCell>
                  <TableCell>{user.signUpMethod}</TableCell>
                  <TableCell>{user.totalDeliveries}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-col sm:flex-row justify-end gap-2">
                      <Link href={`/users/${user.id}`}>
                        <Button variant="secondary" size="sm">
                          View
                        </Button>
                      </Link>

                      <Link href="/users/recent-trips">
                        <Button variant="secondary" size="sm">
                          History
                        </Button>
                      </Link>
                      <Link href="/users/support-requests">
                        <Button size="sm" variant="secondary">
                          Support
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full sm:flex-row sm:items-center sm:justify-between">
          {/* Entry info text */}
          <div className="text-xs text-gray-500 text-center sm:text-left w-full sm:w-auto">
            Showing {indexOfFirstUser + 1} to{" "}
            {Math.min(indexOfLastUser, userData.length)} of {userData.length}{" "}
            entries
          </div>

          {/* Pagination controls */}
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
