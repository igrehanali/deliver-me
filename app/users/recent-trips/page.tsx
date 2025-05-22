import { DashboardLayout } from "@/components/dashboard-layout";
import { RecentTripsTable } from "@/components/recent-trips-table";

export default function RecentTripsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Users</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-teal-800">Recent Trips</span>
        </div>
        <RecentTripsTable />
      </div>
    </DashboardLayout>
  );
}
