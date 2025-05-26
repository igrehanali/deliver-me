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
  const [serviceFee, setServiceFee] = useState("10");
  const [driverPayment, setDriverPayment] = useState("10");
  const [deliverMeePayment, setDeliverMeePayment] = useState("10");
  const [handlingFee, setHandlingFee] = useState("10");
  const [hstFee, setHstFee] = useState("10");

  const [editingField, setEditingField] = useState<string | null>(null);
  const [vehiclePricing, setVehiclePricing] = useState<VehiclePricing[]>(
    initialVehiclePricing
  );
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<VehiclePricing | null>(
    null
  );
  const [editBaseFee, setEditBaseFee] = useState("");
  const [editPricePerKm, setEditPricePerKm] = useState("");

  const handleFeeUpdate = (
    fee: string,
    setFee: React.Dispatch<React.SetStateAction<string>>
  ) => {
    console.log(`Updated fee to ${fee}`);
    // Potentially send to API here
  };

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

  const FeeCard = ({
    id,
    title,
    value,
    onChange,
    onUpdate,
    icon,
  }: {
    id: string;
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onUpdate: () => void;
    icon: React.ReactNode;
  }) => {
    const isEditing = editingField === id;

    const handleToggle = () => {
      if (isEditing) {
        onUpdate();
        setEditingField(null);
      } else {
        setEditingField(id);
      }
    };

    return (
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center">{icon}</div>
            <Input
              value={value}
              onChange={onChange}
              readOnly={!isEditing}
              className={`w-28 ${!isEditing ? "bg-gray-100" : ""}`}
            />
            <Button
              onClick={handleToggle}
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
  };

  return (
    <div className="space-y-6">
      {/* Percentage-based Fees */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeeCard
          id="serviceFee"
          title="Service Fee"
          value={serviceFee}
          onChange={(e) => setServiceFee(e.target.value)}
          onUpdate={() => handleFeeUpdate(serviceFee, setServiceFee)}
          icon={<Percent className="h-5 w-5 text-gray-500 mr-2" />}
        />
        <FeeCard
          id="driverPayment"
          title="Driver Payment"
          value={driverPayment}
          onChange={(e) => setDriverPayment(e.target.value)}
          onUpdate={() => handleFeeUpdate(driverPayment, setDriverPayment)}
          icon={<Percent className="h-5 w-5 text-gray-500 mr-2" />}
        />
        <FeeCard
          id="deliverMeePayment"
          title="DeliverMee Payment"
          value={deliverMeePayment}
          onChange={(e) => setDeliverMeePayment(e.target.value)}
          onUpdate={() =>
            handleFeeUpdate(deliverMeePayment, setDeliverMeePayment)
          }
          icon={<Percent className="h-5 w-5 text-gray-500 mr-2" />}
        />
      </div>

      {/* Fixed and Percentage Fees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeeCard
          id="handlingFee"
          title="Handling Fee"
          value={handlingFee}
          onChange={(e) => setHandlingFee(e.target.value)}
          onUpdate={() => handleFeeUpdate(handlingFee, setHandlingFee)}
          icon={<DollarSign className="h-5 w-5 text-gray-500 mr-2" />}
        />
        <FeeCard
          id="hstFee"
          title="HST Fee"
          value={hstFee}
          onChange={(e) => setHstFee(e.target.value)}
          onUpdate={() => handleFeeUpdate(hstFee, setHstFee)}
          icon={<Percent className="h-5 w-5 text-gray-500 mr-2" />}
        />
      </div>

      {/* Vehicle-Based Pricing */}
      <Card>
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
