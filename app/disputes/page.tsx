import { DashboardLayout } from "@/components/dashboard-layout"
import { DisputesTable } from "@/components/disputes-table"

export default function DisputesPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">Dispute</h1>
        <DisputesTable />
      </div>
    </DashboardLayout>
  )
}
