import { UsersTable } from "@/components/users-table";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">Users</h1>
        <UsersTable />
      </div>
    </DashboardLayout>
  );
}
