"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { MoreVertical } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Data types
type DriverPerformance = {
  id: number;
  name: string;
  rating: number;
  completedDeliveries: number;
};

const driverPerformanceData: DriverPerformance[] = [
  { id: 1, name: "John Doe", rating: 4.9, completedDeliveries: 110 },
  { id: 2, name: "Jane Smith", rating: 4.8, completedDeliveries: 102 },
  { id: 3, name: "Alex Johnson", rating: 4.7, completedDeliveries: 98 },
];

const monthlyEarnings = [
  { month: "Jan", value: 28 },
  { month: "Feb", value: 10 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 38 },
  { month: "May", value: 15 },
  { month: "Jun", value: 30 },
  { month: "Jul", value: 35 },
  { month: "Aug", value: 28 },
];

const pieData = [
  { name: "Completed", value: 220 },
  { name: "Pending", value: 31 },
];

const pieColors = ["#24B364", "#d1fae5", "#A9E9C5"];

export function AnalyticsDashboard() {
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <div>
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-1">
            <span>Export</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Earnings Card with Bar Chart */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-medium">
                Earning Reports
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Yearly Earnings Overview
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold">230k</div>
                <div className="text-sm text-muted-foreground">
                  Total Revenue
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">8.549k</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1.423k</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyEarnings}>
                  <XAxis dataKey="month" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} fill="#076271" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Statistics with Pie Chart */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Delivery Statistics
            </CardTitle>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Total Deliveries</div>
                <div className="text-sm text-green-500">139.34</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Completed Deliveries</div>
                <div className="text-sm text-green-500">+576.24</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Cancelled Deliveries</div>
                <div className="text-sm text-green-500">+76.24</div>
              </div>
            </div>
            <div className="flex justify-center items-center h-48">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index]} />
                    ))}
                  </Pie>
                  {/* Hover text */}
                  <Tooltip
                    contentStyle={{ fontSize: "12px", borderRadius: "8px" }}
                    formatter={(value: number, name: string) => [
                      `${value}`,
                      name,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Driver Performance Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-lg font-medium">
              Driver Performance
            </CardTitle>
            <p className="text-sm text-muted-foreground">Top Rated Drivers</p>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NAME</TableHead>
                <TableHead>RATING</TableHead>
                <TableHead>COMPLETED DELIVERIES</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {driverPerformanceData.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.rating}</TableCell>
                  <TableCell>{driver.completedDeliveries}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
