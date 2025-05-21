import { NotificationsSettings } from "@/components/notifications-settings";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">
          Notifications
        </h1>
        <NotificationsSettings />
      </div>
    </DashboardLayout>
  );
}
