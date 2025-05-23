import { DashboardLayout } from "@/components/dashboard-layout";
import { DisputeDetails } from "@/components/dispute-details";

export default function DisputeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Disputes</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-teal-800">Dispute Details</span>
        </div>
        <DisputeDetails disputeId={params.id} />
      </div>
    </DashboardLayout>
  );
}
