import { DashboardLayout } from "@/components/dashboard-layout"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-800 mb-6">Analytics</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Analytics content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
