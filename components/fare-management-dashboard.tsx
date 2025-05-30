"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Percent, DollarSign } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const fees = [
  {
    id: "serviceFee",
    title: "Service Fee",
    icon: <Percent className="h-5 w-5 text-gray-500 mr-2" />,
    initialValue: "10",
  },
  {
    id: "driverPayment",
    title: "Driver Payment",
    icon: <Percent className="h-5 w-5 text-gray-500 mr-2" />,
    initialValue: "10",
  },
  {
    id: "deliverMeePayment",
    title: "DeliverMee Payment",
    icon: <Percent className="h-5 w-5 text-gray-500 mr-2" />,
    initialValue: "10",
  },
  {
    id: "handlingFee",
    title: "Handling Fee",
    icon: <DollarSign className="h-5 w-5 text-gray-500 mr-2" />,
    initialValue: "10",
  },
  {
    id: "hstFee",
    title: "HST Fee",
    icon: <Percent className="h-5 w-5 text-gray-500 mr-2" />,
    initialValue: "10",
  },
];

type VehiclePricing = {
  id: number;
  type: string;
  baseFee: number;
  pricePerKm: number;
};

const initialVehiclePricing: VehiclePricing[] = [
  { id: 1, type: "SUV", baseFee: 10, pricePerKm: 8 },
  { id: 2, type: "Pickup Truck", baseFee: 10, pricePerKm: 8 },
  { id: 3, type: "Van", baseFee: 10, pricePerKm: 8 },
  { id: 4, type: "Box Truck", baseFee: 10, pricePerKm: 8 },
  { id: 5, type: "Car", baseFee: 10, pricePerKm: 8 },
];

export function FareManagementDashboard() {
  // FeeCard manages its own editing and value state
  function FeeCard({
    title,
    icon,
    initialValue,
  }: {
    title: string;
    icon: React.ReactNode;
    initialValue: string;
  }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);

    const toggleEdit = () => {
      if (isEditing) {
        console.log(`Saved ${title}: ${value}`);
      }
      setIsEditing(!isEditing);
    };

    return (
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <div>{icon}</div>
            <Input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              readOnly={!isEditing}
              className={!isEditing ? "bg-gray-100" : ""}
            />
            <Button
              onClick={toggleEdit}
              className={
                isEditing
                  ? "bg-green-700 hover:bg-green-800"
                  : "bg-teal-700 hover:bg-teal-800"
              }
            >
              {isEditing ? "Save" : "Update"}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Vehicle Pricing state
  const [vehiclePricing, setVehiclePricing] = useState<VehiclePricing[]>(
    initialVehiclePricing
  );
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<VehiclePricing | null>(
    null
  );
  const [editBaseFee, setEditBaseFee] = useState("");
  const [editPricePerKm, setEditPricePerKm] = useState("");

  const handleEditClick = (vehicle: VehiclePricing) => {
    setEditingVehicle(vehicle);
    setEditBaseFee(vehicle.baseFee.toString());
    setEditPricePerKm(vehicle.pricePerKm.toString());
    setEditDialogOpen(true);
  };

  const handleUpdateVehicle = () => {
    if (!editingVehicle) return;
    setVehiclePricing((prev) =>
      prev.map((v) =>
        v.id === editingVehicle.id
          ? {
              ...v,
              baseFee: Number(editBaseFee),
              pricePerKm: Number(editPricePerKm),
            }
          : v
      )
    );
    setEditDialogOpen(false);
    setEditingVehicle(null);
  };

  return (
    <>
      {/* Fee Cards */}
      <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fees.map(({ id, title, icon, initialValue }) => (
          <FeeCard
            key={id}
            title={title}
            icon={icon}
            initialValue={initialValue}
          />
        ))}
      </div>

      {/* Vehicle-Based Pricing */}
      <Card className="mt-8">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">
            Vehicle-Based Pricing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle Type</TableHead>
                  <TableHead>Base Fee ($)</TableHead>
                  <TableHead>Price per km ($)</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehiclePricing.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>{vehicle.type}</TableCell>
                    <TableCell>{vehicle.baseFee}</TableCell>
                    <TableCell>{vehicle.pricePerKm}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditClick(vehicle)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Pricing Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Pricing for {editingVehicle?.type}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Base Fee ($)
              </label>
              <Input
                type="number"
                value={editBaseFee}
                onChange={(e) => setEditBaseFee(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Price per km ($)
              </label>
              <Input
                type="number"
                value={editPricePerKm}
                onChange={(e) => setEditPricePerKm(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={handleUpdateVehicle}
            >
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
