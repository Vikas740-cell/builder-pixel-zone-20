import { Receipt } from "lucide-react";
import { Placeholder } from "@/components/Placeholder";

export default function Records() {
  return (
    <Placeholder
      title="Expense Records"
      description="View and manage all your expense records with powerful filters, search functionality, and editing capabilities for the past 5 years."
      icon={Receipt}
    />
  );
}
