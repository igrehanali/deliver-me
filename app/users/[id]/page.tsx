import { UserDetails } from "@/components/user-details";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Users</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-teal-800">View Details</span>
        </div>
        <UserDetails userId={params.id} />
      </div>
    </DashboardLayout>
  );
}
