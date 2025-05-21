import { FareManagementDashboard } from "@/components/fare-management-dashboard";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function FareManagementPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">
          Fare Management
        </h1>
        <FareManagementDashboard />
      </div>
    </DashboardLayout>
  );
}
