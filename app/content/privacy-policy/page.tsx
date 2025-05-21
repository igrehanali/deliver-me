import { DashboardLayout } from "@/components/dashboard-layout";
import { EditPrivacyPolicy } from "@/components/edit-privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <DashboardLayout>
      <EditPrivacyPolicy />
    </DashboardLayout>
  );
}
