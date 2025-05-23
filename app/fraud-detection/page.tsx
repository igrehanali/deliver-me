import { DashboardLayout } from "@/components/dashboard-layout";
import { FraudDetectionDashboard } from "@/components/fraud-detection-dashboard";

export default function FraudDetectionPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">
          Fraud Detection
        </h1>
        <FraudDetectionDashboard />
      </div>
    </DashboardLayout>
  );
}
