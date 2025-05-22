"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/components/auth-layout";

export default function VerifyEmailPage() {
  const [verificationCode, setVerificationCode] = useState("");
  const [isResending, setIsResending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to verify the code
    console.log("Verification code submitted:", verificationCode);
    // Redirect to dashboard on success
  };

  const handleResend = () => {
    setIsResending(true);
    // Here you would typically make an API call to resend the verification code
    console.log("Resending verification code");
    // Show success message and reset resending state
    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold mb-2">Verify your email ✉️</h1>
        <p className="text-gray-500">
          Account activation code sent to your email address:
          <br />
          <span className="font-medium">john.doe@email.com</span> Please enter
          code to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="verificationCode" className="text-sm font-medium">
            Enter Verification code here
          </label>
          <Input
            id="verificationCode"
            type="text"
            placeholder="Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800">
          Continue
        </Button>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Didn't get the mail?{" "}
          <Button
            variant="link"
            className="p-0 h-auto text-teal-600 hover:text-teal-700"
            onClick={handleResend}
            disabled={isResending}
          >
            {isResending ? "Sending..." : "Resend"}
          </Button>
        </p>
      </div>
    </AuthLayout>
  );
}
