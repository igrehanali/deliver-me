"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthLayout } from "@/components/auth-layout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate the user
    console.log("Login form submitted:", formData);
    // Redirect to dashboard on success
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold text-center mb-2">Log In</h1>
      <p className="text-gray-500 text-center mb-6">
        Enter Your Account Details to Log In.
      </p>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Account Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="emailOrUsername" className="text-sm font-medium">
              Email or Username
            </label>
            <Input
              id="emailOrUsername"
              type="text"
              placeholder="Enter your email or username"
              value={formData.emailOrUsername}
              onChange={(e) =>
                handleInputChange("emailOrUsername", e.target.value)
              }
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  handleInputChange("rememberMe", !!checked)
                }
              />
              <label htmlFor="rememberMe" className="text-sm">
                Remember Me
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-teal-600 hover:text-teal-700"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800"
          >
            Log in
          </Button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">
          New on our platform?{" "}
          <Link
            href="/auth/signup"
            className="text-teal-600 hover:text-teal-700"
          >
            Create an account
          </Link>
        </p>

        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">or Log in with</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="#F25022"
                  d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
