"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

type ContentItem = {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
  editPath: string;
};

const initialContentItems: ContentItem[] = [
  {
    id: "terms",
    title: "Terms & Conditions",
    description:
      "These terms and conditions outline the rules and regulations for the use of the app...",
    lastUpdated: "Jan 5, 2025",
    editPath: "/content/terms-conditions",
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    description:
      "Your privacy is important to us. This policy outlines how we collect and use information...",
    lastUpdated: "Jan 5, 2025",
    editPath: "/content/privacy-policy",
  },
];

export function ContentManagement() {
  const [contentItems] = useState<ContentItem[]>(initialContentItems);

  return (
    <div className="space-y-4">
      {contentItems.map((item) => (
        <Card key={item.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg font-medium">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {item.description}
                </CardDescription>
              </div>
              <Link href={item.editPath}>
                <Button className="bg-teal-700 hover:bg-teal-800">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              Last updated: {item.lastUpdated}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
