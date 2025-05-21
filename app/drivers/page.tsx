import { DriversTable } from "@/components/drivers-table";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function DriversPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">Driver</h1>
        <DriversTable />
      </div>
    </DashboardLayout>
  );
}
