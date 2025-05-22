import { DashboardLayout } from "@/components/dashboard-layout";
import { SupportRequestsTable } from "@/components/support-requests-table";

export default function SupportRequestsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Users</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-teal-800">Support Requests</span>
        </div>
        <SupportRequestsTable />
      </div>
    </DashboardLayout>
  );
}
