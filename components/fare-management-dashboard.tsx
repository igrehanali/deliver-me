"use client";

import type React from "react";
import { useState } from "react";
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
import { DollarSign, Percent } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

// Define the vehicle pricing data type
type VehiclePricing = {
  id: number;
  type: string;
  baseFee: number;
  pricePerKm: number;
};

// Sample vehicle pricing data
const initialVehiclePricing: VehiclePricing[] = [
  { id: 1, type: "SUV", baseFee: 10, pricePerKm: 8 },
  { id: 2, type: "Pickup Truck", baseFee: 10, pricePerKm: 8 },
  { id: 3, type: "Van", baseFee: 10, pricePerKm: 8 },
  { id: 4, type: "Box Truck", baseFee: 10, pricePerKm: 8 },
  { id: 5, type: "Car", baseFee: 10, pricePerKm: 8 },
];

export function FareManagementDashboard() {
  // State for fee values
  const [serviceFee, setServiceFee] = useState("10");
  const [driverPayment, setDriverPayment] = useState("10");
  const [deliverMeePayment, setDeliverMeePayment] = useState("10");
  const [handlingFee, setHandlingFee] = useState("10");
  const [hstFee, setHstFee] = useState("10");

  // State for vehicle pricing
  const [vehiclePricing, setVehiclePricing] = useState<VehiclePricing[]>(
    initialVehiclePricing
  );

  // State for dialog
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<VehiclePricing | null>(
    null
  );
  const [editBaseFee, setEditBaseFee] = useState("");
  const [editPricePerKm, setEditPricePerKm] = useState("");

  // Function to handle fee updates
  const handleFeeUpdate = (
    fee: string,
    setFee: React.Dispatch<React.SetStateAction<string>>
  ) => {
    // Here you would typically make an API call to update the fee
    // For now, we'll just update the state
    console.log(`Updated fee to ${fee}`);
    // You could show a success toast here
  };

  // Open dialog and set editing vehicle
  const handleEditClick = (vehicle: VehiclePricing) => {
    setEditingVehicle(vehicle);
    setEditBaseFee(vehicle.baseFee.toString());
    setEditPricePerKm(vehicle.pricePerKm.toString());
    setEditDialogOpen(true);
  };

  // Update vehicle pricing
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
    <div className="space-y-4">
      {/* Percentage-based fees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Service Fee */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">Service Fee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Percent className="h-5 w-5 text-gray-500 mr-2" />
              </div>
              <Input
                value={serviceFee}
                onChange={(e) => setServiceFee(e.target.value)}
                className="w-32"
              />
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={() => handleFeeUpdate(serviceFee, setServiceFee)}
              >
                Update
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Driver Payment */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">
              Driver Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Percent className="h-5 w-5 text-gray-500 mr-2" />
              </div>
              <Input
                value={driverPayment}
                onChange={(e) => setDriverPayment(e.target.value)}
                className="w-32"
              />
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={() => handleFeeUpdate(driverPayment, setDriverPayment)}
              >
                Update
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* DeliverMee Payment */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">
              DeliverMee Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Percent className="h-5 w-5 text-gray-500 mr-2" />
              </div>
              <Input
                value={deliverMeePayment}
                onChange={(e) => setDeliverMeePayment(e.target.value)}
                className="w-32"
              />
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={() =>
                  handleFeeUpdate(deliverMeePayment, setDeliverMeePayment)
                }
              >
                Update
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fixed and percentage fees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Handling Fee */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">Handling Fee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
              </div>
              <Input
                value={handlingFee}
                onChange={(e) => setHandlingFee(e.target.value)}
                className="w-32"
              />
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={() => handleFeeUpdate(handlingFee, setHandlingFee)}
              >
                Update
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* HST Fee Section */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">
              HST Fee Section
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Percent className="h-5 w-5 text-gray-500 mr-2" />
              </div>
              <Input
                value={hstFee}
                onChange={(e) => setHstFee(e.target.value)}
                className="w-32"
              />
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={() => handleFeeUpdate(hstFee, setHstFee)}
              >
                Update
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle-Based Pricing */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">
            Vehicle-Based Pricing
          </CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

      {/* Edit Vehicle Dialog */}
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
                min={0}
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
                min={0}
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
    </div>
  );
}
