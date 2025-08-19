import { User } from "lucide-react";
import { Placeholder } from "@/components/Placeholder";

export default function Profile() {
  return (
    <Placeholder
      title="Profile"
      description="Manage your personal information, security settings, password changes, and account preferences."
      icon={User}
    />
  );
}
