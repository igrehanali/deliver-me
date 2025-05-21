import { SupportTabs } from "@/components/support-tabs";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function SupportPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">
          Support & Issue Resolution
        </h1>
        <SupportTabs defaultTab="account" />
      </div>
    </DashboardLayout>
  );
}
export const metadata = {
  title: "Support & Issue Resolution",
  description: "Get help with your account and resolve issues.",
};
