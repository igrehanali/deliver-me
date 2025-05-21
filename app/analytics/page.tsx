import { AnalyticsDashboard } from "@/components/analytics-dashboard";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">Analytics</h1>
        <AnalyticsDashboard />
      </div>
    </DashboardLayout>
  );
}
