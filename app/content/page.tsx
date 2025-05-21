import { ContentManagement } from "@/components/content-management";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function ContentPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">Content</h1>
        <ContentManagement />
      </div>
    </DashboardLayout>
  );
}
