import { DashboardLayout } from "@/components/dashboard-layout";
import { FlaggedUserDetail } from "@/components/flagged-user-detail";

export default function FlaggedUserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Fraud Detection</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-teal-800">
            Flagged Users Detail
          </span>
        </div>
        <FlaggedUserDetail userId={params.id} />
      </div>
    </DashboardLayout>
  );
}
