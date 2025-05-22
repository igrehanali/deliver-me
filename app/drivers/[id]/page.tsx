import { DashboardLayout } from "@/components/dashboard-layout";
import { DriverDetails } from "@/components/driver-details";

export default function DriverDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Drivers</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-teal-800">View Details</span>
        </div>
        <DriverDetails driverId={params.id} />
      </div>
    </DashboardLayout>
  );
}
