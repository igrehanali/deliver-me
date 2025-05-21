"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertTriangleIcon } from "lucide-react";

export function BillingTab() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardData, setCardData] = useState({
    cardNumber: "",
    name: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  });
  const [billingData, setbillingData] = useState({
    companyName: "Pixivent",
    billingEmail: "john.doe@example.com",
    taxId: "",
    hstNumber: "",
    mobile: "",
    country: "USA",
    billingAddress: "",
    province: "California",
    postalCode: "23456",
  });

  const handleCardInputChange = (field: string, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBillingInputChange = (field: string, value: string) => {
    setbillingData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    // Here you would typically make an API call to save the billing data
    console.log("Saving billing data:", {
      paymentMethod,
      cardData,
      billingData,
    });
    // You could show a success toast here
  };

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-lg font-medium mb-1">Current Plan</h3>
              <p className="text-sm text-gray-500 mb-1">
                Your Current Plan is Basic
              </p>
              <p className="text-sm text-gray-500 mb-4">
                A simple start for everyone
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Active until Dec 09, 2021</span>
              </p>
              <p className="text-sm text-gray-500">
                We will send you a notification upon Subscription expiration
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button className="bg-teal-700 hover:bg-teal-800">
                  Upgrade Plan
                </Button>
                <Button
                  variant="destructive"
                  className="bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700"
                >
                  Cancel Subscription
                </Button>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="bg-orange-50 border border-orange-100 rounded-md p-4 max-w-md">
                <div className="flex items-start gap-3">
                  <AlertTriangleIcon className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-orange-800 mb-1">
                      We need your attention!
                    </h4>
                    <p className="text-sm text-orange-700">
                      Your plan requires update
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Days</span>
                  <span className="text-sm font-medium">12 of 30 Days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  18 days remaining until your plan requires update
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">$199 Per Month</p>
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded">
                  Popular
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Standard plan for small to medium businesses
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit/Debit/ATM Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="applepay" id="applepay" />
              <Label htmlFor="applepay">Apple Pay account</Label>
            </div>
          </RadioGroup>

          {paymentMethod === "card" && (
            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="text-sm font-medium">
                    Card Number
                  </label>
                  <Input
                    id="cardNumber"
                    placeholder="1356 3215 6548 7898"
                    value={cardData.cardNumber}
                    onChange={(e) =>
                      handleCardInputChange("cardNumber", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={cardData.name}
                    onChange={(e) =>
                      handleCardInputChange("name", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="expiryDate" className="text-sm font-medium">
                    Expiry Date
                  </label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={cardData.expiryDate}
                    onChange={(e) =>
                      handleCardInputChange("expiryDate", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium">
                    CVV Code
                  </label>
                  <Input
                    id="cvv"
                    placeholder="654"
                    value={cardData.cvv}
                    onChange={(e) =>
                      handleCardInputChange("cvv", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="saveCard"
                  checked={cardData.saveCard}
                  onChange={(e) =>
                    handleCardInputChange(
                      "saveCard",
                      e.target.checked.toString()
                    )
                  }
                  className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="saveCard" className="text-sm text-gray-500">
                  Save card for future billing?
                </label>
              </div>

              <div>
                <Button
                  className="bg-teal-700 hover:bg-teal-800"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
                <Button variant="outline" className="ml-2">
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h4 className="font-medium mb-4">My Cards</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500 h-10 w-16 rounded flex items-center justify-center">
                      <span className="text-white font-bold">MC</span>
                    </div>
                    <div>
                      <p className="font-medium">Tom McBride</p>
                      <p className="text-sm text-gray-500">
                        •••• •••• •••• 9865
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-red-50 text-red-600 border-red-100 hover:bg-red-100 hover:text-red-700"
                      >
                        Delete
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Card expires at 12/24
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 h-10 w-16 rounded flex items-center justify-center">
                      <span className="text-white font-bold">VISA</span>
                    </div>
                    <div>
                      <p className="font-medium">Mildred Wagner</p>
                      <p className="text-sm text-gray-500">
                        •••• •••• •••• 5678
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs bg-red-50 text-red-600 border-red-100 hover:bg-red-100 hover:text-red-700"
                      >
                        Delete
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Card expires at 02/24
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing Address */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Billing Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium">
                Company Name
              </label>
              <Input
                id="companyName"
                value={billingData.companyName}
                onChange={(e) =>
                  handleBillingInputChange("companyName", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="billingEmail" className="text-sm font-medium">
                Billing Email
              </label>
              <Input
                id="billingEmail"
                type="email"
                value={billingData.billingEmail}
                onChange={(e) =>
                  handleBillingInputChange("billingEmail", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="taxId" className="text-sm font-medium">
                Tax ID
              </label>
              <Input
                id="taxId"
                placeholder="Enter Tax ID"
                value={billingData.taxId}
                onChange={(e) =>
                  handleBillingInputChange("taxId", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="hstNumber" className="text-sm font-medium">
                HST Number
              </label>
              <Input
                id="hstNumber"
                placeholder="Enter HST Number"
                value={billingData.hstNumber}
                onChange={(e) =>
                  handleBillingInputChange("hstNumber", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="mobile" className="text-sm font-medium">
                Mobile
              </label>
              <Select
                value={billingData.mobile}
                onValueChange={(value) =>
                  handleBillingInputChange("mobile", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="US (+1)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">US (+1)</SelectItem>
                  <SelectItem value="uk">UK (+44)</SelectItem>
                  <SelectItem value="ca">CA (+1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium">
                Country
              </label>
              <Select
                value={billingData.country}
                onValueChange={(value) =>
                  handleBillingInputChange("country", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="USA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="billingAddress" className="text-sm font-medium">
                Billing Address
              </label>
              <Input
                id="billingAddress"
                placeholder="Billing Address"
                value={billingData.billingAddress}
                onChange={(e) =>
                  handleBillingInputChange("billingAddress", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="province" className="text-sm font-medium">
                Province
              </label>
              <Input
                id="province"
                value={billingData.province}
                onChange={(e) =>
                  handleBillingInputChange("province", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="postalCode" className="text-sm font-medium">
                Postal Code
              </label>
              <Input
                id="postalCode"
                value={billingData.postalCode}
                onChange={(e) =>
                  handleBillingInputChange("postalCode", e.target.value)
                }
              />
            </div>
          </div>

          <div className="mt-6">
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
            <Button variant="outline" className="ml-2">
              Discard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
