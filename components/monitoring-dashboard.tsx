"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

// Define delivery data type
type Delivery = {
  id: string;
  driver: string;
  status:
    | "In Transit"
    | "Waiting Pickup"
    | "Started"
    | "Completed"
    | "Cancelled";
};

// Sample delivery data
const deliveryData: Delivery[] = Array.from({ length: 25 }, (_, i) => ({
  id: `#DLV12345`,
  driver: "John Doe - Chair Delivery",
  status:
    i % 3 === 0 ? "In Transit" : i % 3 === 1 ? "Waiting Pickup" : "Started",
}));

export function MonitoringDashboard() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(deliveryData.length / itemsPerPage);

  // Get current deliveries
  const indexOfLastDelivery = currentPage * itemsPerPage;
  const indexOfFirstDelivery = indexOfLastDelivery - itemsPerPage;
  const currentDeliveries = deliveryData.slice(
    indexOfFirstDelivery,
    indexOfLastDelivery
  );

  // Get status badge styling
  const getStatusBadge = (status: Delivery["status"]) => {
    switch (status) {
      case "In Transit":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            In Transit
          </Badge>
        );
      case "Waiting Pickup":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Waiting Pickup
          </Badge>
        );
      case "Started":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            Started
          </Badge>
        );
      case "Completed":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Completed
          </Badge>
        );
      case "Cancelled":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Cancelled
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Live Map */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Live Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[400px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2763262508!2d-73.57748492346147!3d45.50397413567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4498edc3c1%3A0xd934dac0c9175c77!2sDowntown%20Montreal%2C%20Montreal%2C%20QC!5e0!3m2!1sen!2sca!4v1653323456789!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute bottom-4 left-4 flex flex-col gap-2 bg-white p-2 rounded-md shadow-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-purple-600"></span>
                <span className="text-xs">Online Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-600"></span>
                <span className="text-xs">Active Deliveries</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Status Feed */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">
            Delivery Status Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentDeliveries.map((delivery, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border-b last:border-b-0 hover:bg-gray-50"
              >
                <div>
                  <div className="font-medium">DELIVERY ID: {delivery.id}</div>
                  <div className="text-sm text-gray-500">
                    Driver: {delivery.driver}
                  </div>
                </div>
                <div>{getStatusBadge(delivery.status)}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstDelivery + 1} to{" "}
              {Math.min(indexOfLastDelivery, deliveryData.length)} of{" "}
              {deliveryData.length} entries
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
    </div>
  );
}
