import { PlusCircle } from "lucide-react";
import { Placeholder } from "@/components/Placeholder";

export default function AddExpense() {
  return (
    <Placeholder
      title="Add Expense"
      description="Create a detailed expense entry form with categories, payment methods, receipts upload, and smart categorization features."
      icon={PlusCircle}
    />
  );
}
