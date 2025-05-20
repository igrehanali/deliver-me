"use client";

import {
  ArrowUp,
  Clock,
  DollarSign,
  DownloadIcon,
  MoreVertical,
  Truck,
  Upload,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardOverview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-teal-800 mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Congratulations Card */}
        <Card>
          <CardContent className="relative p-6">
            <div className="pr-36">
              {" "}
              {/* Right padding to avoid overlapping image */}
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-medium">Congratulations Lucas</h3>
                <span>🎉</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Best seller of the month
              </p>
              <div className="text-3xl font-bold text-teal-700 mb-4">
                $48.9k
              </div>
              <Button className="bg-teal-700 hover:bg-teal-800">
                View Sales
              </Button>
            </div>

            <img
              src="/dashboard.png"
              alt="dashboard icon"
              className="absolute bottom-0 right-4 h-40 w-32 object-cover"
            />
          </CardContent>
        </Card>

        {/* Statistics Card */}
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <div className="text-xl font-bold">230k</div>
                <div className="text-sm text-gray-500">Users</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-xl font-bold">8.549k</div>
                <div className="text-sm text-gray-500">Total Drivers</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="text-xl font-bold">1.423k</div>
                <div className="text-sm text-gray-500">Total Deliveries</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-xl font-bold">$9745</div>
                <div className="text-sm text-gray-500">Revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Earning Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Earning</CardTitle>
            <Select defaultValue="monthly">
              <SelectTrigger className="w-[120px] h-8">
                <SelectValue placeholder="Monthly" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2 mb-6">
              <div className="text-4xl font-bold">87%</div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowUp className="h-4 w-4 mr-1" />
                25.8%
              </div>
            </div>

            <div className="space-y-4">
              {/* Chart placeholder */}
              <div className="h-32 flex items-end justify-between gap-1">
                {[40, 25, 60, 20, 35, 55, 45, 10].map((height, i) => {
                  const secondHeight = Math.random() * 30 + 10;
                  // Keep total max 100%
                  const totalHeight = height + secondHeight;
                  const scaleFactor = totalHeight > 100 ? 100 / totalHeight : 1;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 w-2"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="w-full bg-[#076271] rounded-md"
                        style={{ height: `${height * scaleFactor}%` }}
                      ></div>
                      <div
                        className="w-full bg-gray-400 rounded-md"
                        style={{ height: `${secondHeight * scaleFactor}%` }}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-indigo-100 p-2 rounded">
                      <DollarSign className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-medium">Total Revenue</div>
                      <div className="text-sm text-gray-500">
                        Client Payment
                      </div>
                    </div>
                  </div>
                  <div className="text-green-500">+$126</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 p-2 rounded">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Total Sales</div>
                      <div className="text-sm text-gray-500">Refund</div>
                    </div>
                  </div>
                  <div className="text-green-500">+$98</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Overview Card */}
        <Card className="p-0">
          <CardHeader className="flex flex-row items-center justify-between px-6 pt-6 pb-2">
            <CardTitle className="text-base font-medium">
              Delivery overview
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-500"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="px-6 pb-6 pt-0 space-y-6">
            {/* Progress Bar Section */}
            <div className="space-y-3">
              {/* Labels */}
              <div className="flex justify-between text-xs text-muted-foreground font-medium">
                <span>On the way</span>
                <span>Unloading</span>
                <span>Loading</span>
                <span>Waiting</span>
              </div>

              {/* Progress bar */}
              <div className="h-12 w-full rounded bg-gray-200 overflow-hidden flex">
                <div className="bg-gray-300" style={{ width: "39.7%" }} />
                <div className="bg-teal-700" style={{ width: "28.3%" }} />
                <div className="bg-teal-400" style={{ width: "17.4%" }} />
                <div className="bg-slate-900" style={{ width: "14.6%" }} />
              </div>

              {/* Percentages */}
              <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                <span>39.7%</span>
                <span>28.3%</span>
                <span>17.4%</span>
                <span>14.6%</span>
              </div>
            </div>

            {/* Time Details Section */}
            <div className="space-y-4 pt-2">
              {/* On the way */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Truck className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium">On the way</span>
                </div>
                <div className="text-right text-sm">
                  <div className="font-medium">2hr 10min</div>
                  <div className="text-xs text-gray-500 font-medium">39.7%</div>
                </div>
              </div>

              {/* Unloading */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Upload className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium">Unloading</span>
                </div>
                <div className="text-right text-sm">
                  <div className="font-medium">3hr 15min</div>
                  <div className="text-xs text-gray-500 font-medium">28.3%</div>
                </div>
              </div>

              {/* Loading */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <DownloadIcon className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium">Loading</span>
                </div>
                <div className="text-right text-sm">
                  <div className="font-medium">1hr 24min</div>
                  <div className="text-xs text-gray-500 font-medium">17.4%</div>
                </div>
              </div>

              {/* Waiting */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Clock className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium">Waiting</span>
                </div>
                <div className="text-right text-sm">
                  <div className="font-medium">5hr 19min</div>
                  <div className="text-xs text-gray-500 font-medium">14.6%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
