import { DashboardLayout } from "@/components/dashboard-layout";
import { MonitoringDashboard } from "@/components/monitoring-dashboard";

export default function MonitoringPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">
          Monitoring
        </h1>
        <MonitoringDashboard />
      </div>
    </DashboardLayout>
  );
}
