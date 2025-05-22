"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/components/auth-layout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically make an API call to send a password reset email
    console.log("Forgot password form submitted:", email);
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold mb-2">Forgot Password? 🔒</h1>
        <p className="text-gray-500">
          Enter your email and we'll send you instructions to reset your
          password
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center space-y-6">
          <div className="bg-green-50 text-green-800 p-4 rounded-md">
            Password reset email sent! Please check your inbox.
          </div>
          <Link
            href="/auth/login"
            className="inline-flex items-center text-sm text-teal-600 hover:text-teal-700"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </Button>

          <div className="text-center">
            <Link
              href="/auth/login"
              className="inline-flex items-center text-sm text-teal-600 hover:text-teal-700"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}
