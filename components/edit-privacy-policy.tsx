"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export function EditPrivacyPolicy() {
  const [privacyContent, setPrivacyContent] = useState<string>(
    `PRIVACY POLICY

Last Updated: January 5, 2025

1. INTRODUCTION

DeliverMee ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").

2. INFORMATION WE COLLECT

We may collect information about you in various ways:

- Personal Data: Name, email address, phone number, billing address, and payment information.
- Usage Data: Information on how you access and use our Service.
- Location Data: With your consent, we collect real-time location information to provide delivery services.
- Device Data: Information about your mobile device, including device type, operating system, and unique identifiers.

3. HOW WE USE YOUR INFORMATION

We use the information we collect to:

- Provide, maintain, and improve our Service
- Process and complete transactions
- Send you transaction-related emails and notifications
- Respond to your comments and questions
- Monitor and analyze usage patterns and trends
- Enhance the safety and security of our Service

4. DISCLOSURE OF YOUR INFORMATION

We may share your information with:

- Service providers who perform services on our behalf
- Partners with whom we offer co-branded services or promotions
- Law enforcement or other governmental authorities in response to a legal request
- Other parties in connection with a company transaction, such as a merger or sale of assets

5. YOUR CHOICES

You can:

- Update or correct your account information
- Opt-out of marketing communications
- Disable location services through your device settings
- Request deletion of your personal data, subject to certain exceptions

6. SECURITY

We implement appropriate technical and organizational measures to protect your personal information.

7. CHANGES TO THIS PRIVACY POLICY

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

8. CONTACT US

If you have questions about this Privacy Policy, please contact us at privacy@delivermee.com.`
  );
  const router = useRouter();
  const handleSave = () => {
    // Here you would typically make an API call to save the privacy policy content
    console.log("Saving privacy policy:", privacyContent);
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
        <span>Edit Privacy Policy</span>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">
              THIS IS THE PLATFORM'S PRIVACY POLICY. PLEASE UPDATE ACCORDINGLY.
            </h2>
            {/* <link href="/content"> */}
            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={handleSave}
            >
              Save Changes
            </Button>
            {/* </link> */}
          </div>

          <Textarea
            value={privacyContent}
            onChange={(e) => setPrivacyContent(e.target.value)}
            className="min-h-[500px] font-mono text-sm"
          />
        </CardContent>
      </Card>
    </div>
  );
}
