import { SupportTickets } from "@/components/support-tickets";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function SupportTicketsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">
          Support & Issue Resolution
        </h1>
        <SupportTickets />
      </div>
    </DashboardLayout>
  );
}
