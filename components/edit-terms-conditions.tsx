"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export function EditTermsConditions() {
  const [termsContent, setTermsContent] = useState<string>(
    `1. ACCEPTANCE OF TERMS

By accessing and using the DeliverMee application ("the App"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.

2. USE OF THE APP

The App is provided for the purpose of connecting users with delivery services. You agree to use the App only for lawful purposes and in accordance with these Terms.

3. USER ACCOUNTS

You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.

4. DELIVERY SERVICES

DeliverMee acts as an intermediary platform connecting users with independent delivery providers. DeliverMee is not responsible for the actual delivery of items.

5. PAYMENTS

All payments are processed through secure third-party payment processors. You agree to pay all fees associated with the services you request.

6. LIMITATION OF LIABILITY

To the maximum extent permitted by law, DeliverMee shall not be liable for any indirect, incidental, special, consequential, or punitive damages.

7. CHANGES TO TERMS

DeliverMee reserves the right to modify these Terms at any time. Continued use of the App after such modifications constitutes your acceptance of the revised Terms.

8. GOVERNING LAW

These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.

9. CONTACT INFORMATION

If you have any questions about these Terms, please contact us at support@delivermee.com.`
  );

  const router = useRouter();
  const handleSave = () => {
    // Here you would typically make an API call to save the privacy policy content
    // console.log("Saving privacy policy:", privacyContent);
    router.push("/content"); // Redirect to the content page after saving
    // You could show a success toast here
  };

  return (
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Link href="/content" className="hover:text-teal-600">
          Content
        </Link>
        <span className="mx-2">/</span>
        <span>Edit Terms & Conditions</span>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">
              THESE ARE THE PLATFORM'S TERMS & CONDITIONS. PLEASE UPDATE
              ACCORDINGLY.
            </h2>
            {/* <Link href="/content"> */}
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={handleSave}
            >
              Save Changes
            </Button>
            {/* </Link> */}
          </div>

          <Textarea
            value={termsContent}
            onChange={(e) => setTermsContent(e.target.value)}
            className="min-h-[500px] font-mono text-sm"
          />
        </CardContent>
      </Card>
    </div>
  );
}
