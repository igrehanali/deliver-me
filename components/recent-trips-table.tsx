"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

// Define trip data type
type Trip = {
  id: string;
  date: string;
  from: string;
  to: string;
  fare: string;
};

// Sample trip data
const initialTrips: Trip[] = [
  {
    id: "#12345",
    date: "2025-05-10",
    from: "Lahore",
    to: "Islamabad",
    fare: "$32.00",
  },
  {
    id: "#12345",
    date: "2025-05-10",
    from: "Lahore",
    to: "Islamabad",
    fare: "$32.00",
  },
];

export function RecentTripsTable() {
  const [trips] = useState<Trip[]>(initialTrips);

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">TRIP ID</TableHead>
              <TableHead className="w-[150px]">DATE</TableHead>
              <TableHead>FROM</TableHead>
              <TableHead>TO</TableHead>
              <TableHead className="w-[150px]">FARE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trips.map((trip, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{trip.id}</TableCell>
                <TableCell>{trip.date}</TableCell>
                <TableCell>{trip.from}</TableCell>
                <TableCell>{trip.to}</TableCell>
                <TableCell>{trip.fare}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
