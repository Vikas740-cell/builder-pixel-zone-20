import { useState } from "react";
import {
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  CreditCard,
  Wallet,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Coffee,
  Car,
  Home,
  ShoppingBag,
  Gamepad2,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const expenseCategories = [
  {
    id: "food",
    label: "Food",
    icon: Coffee,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: "transport",
    label: "Transport",
    icon: Car,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    id: "bills",
    label: "Bills",
    icon: Home,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    id: "shopping",
    label: "Shopping",
    icon: ShoppingBag,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    id: "social",
    label: "Social Life",
    icon: Gamepad2,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    id: "other",
    label: "Other",
    icon: Receipt,
    color: "text-gray-500",
    bg: "bg-gray-50",
  },
];

const paymentMethods = [
  { id: "upi", label: "UPI" },
  { id: "cash", label: "Cash" },
  { id: "card", label: "Credit/Debit Card" },
  { id: "net-banking", label: "Net Banking" },
];

const recentExpenses = [
  {
    id: 1,
    description: "Lunch at Restaurant",
    amount: 450,
    category: "food",
    method: "upi",
    date: "2024-01-15",
    time: "2:30 PM",
  },
  {
    id: 2,
    description: "Uber to Office",
    amount: 180,
    category: "transport",
    method: "upi",
    date: "2024-01-15",
    time: "9:15 AM",
  },
  {
    id: 3,
    description: "Grocery Shopping",
    amount: 1200,
    category: "food",
    method: "card",
    date: "2024-01-14",
    time: "7:45 PM",
  },
  {
    id: 4,
    description: "Movie Tickets",
    amount: 600,
    category: "social",
    method: "upi",
    date: "2024-01-14",
    time: "6:00 PM",
  },
  {
    id: 5,
    description: "Electricity Bill",
    amount: 2300,
    category: "bills",
    method: "net-banking",
    date: "2024-01-13",
    time: "11:30 AM",
  },
];

export default function Dashboard() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleQuickAdd = () => {
    if (amount && description && category && paymentMethod) {
      // In a real app, this would save to a database
      console.log("Adding expense:", {
        amount,
        description,
        category,
        paymentMethod,
      });
      setAmount("");
      setDescription("");
      setCategory("");
      setPaymentMethod("");
    }
  };

  const getCategoryInfo = (categoryId: string) => {
    return (
      expenseCategories.find((cat) => cat.id === categoryId) ||
      expenseCategories[5]
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Welcome back! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here's your financial overview for January 2024
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-lg font-semibold">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="card-hover border-0 shadow-lg bg-gradient-to-br from-violet-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-violet-100 text-sm font-medium">
                  Total Spent
                </p>
                <p className="text-2xl font-bold">₹12,430</p>
                <p className="text-xs text-violet-200 mt-1">This month</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Daily Average
                </p>
                <p className="text-2xl font-bold text-gray-900">₹829</p>
                <div className="flex items-center mt-1">
                  <ArrowDownRight className="h-3 w-3 text-green-500 mr-1" />
                  <p className="text-xs text-green-600">
                    12% less than last month
                  </p>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Top Category
                </p>
                <p className="text-2xl font-bold text-gray-900">Food</p>
                <p className="text-xs text-gray-500 mt-1">₹4,680 spent</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center">
                <Coffee className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Transactions
                </p>
                <p className="text-2xl font-bold text-gray-900">47</p>
                <div className="flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-red-500 mr-1" />
                  <p className="text-xs text-red-600">
                    8% more than last month
                  </p>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Quick Add Expense */}
        <Card className="xl:col-span-1 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-violet-600" />
              Quick Add Expense
            </CardTitle>
            <CardDescription>
              Add a new expense quickly and easily
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg font-semibold"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="What did you spend on?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {expenseCategories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      <div className="flex items-center gap-2">
                        <cat.icon className={`h-4 w-4 ${cat.color}`} />
                        {cat.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="How did you pay?" />
                </SelectTrigger>
                <SelectContent>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method.id} value={method.id}>
                      {method.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleQuickAdd}
              className="w-full gradient-primary hover:opacity-90 transition-opacity"
              disabled={!amount || !description || !category || !paymentMethod}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </CardContent>
        </Card>

        {/* Recent Expenses */}
        <Card className="xl:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-violet-600" />
              Recent Expenses
            </CardTitle>
            <CardDescription>Your latest transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentExpenses.map((expense) => {
                const categoryInfo = getCategoryInfo(expense.category);
                const CategoryIcon = categoryInfo.icon;

                return (
                  <div
                    key={expense.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all duration-200 animate-slide-in-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-full ${categoryInfo.bg} flex items-center justify-center`}
                      >
                        <CategoryIcon
                          className={`h-5 w-5 ${categoryInfo.color}`}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {expense.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{expense.date}</span>
                          <span>•</span>
                          <span>{expense.time}</span>
                          <span>•</span>
                          <span className="capitalize">
                            {expense.method.replace("-", " ")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        ₹{expense.amount}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        {categoryInfo.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="border-violet-200 text-violet-600 hover:bg-violet-50"
              >
                View All Transactions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Analytics Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-violet-600" />
              Spending by Category
            </CardTitle>
            <CardDescription>This month's breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseCategories.slice(0, 4).map((category, index) => {
                const percentages = [38, 25, 18, 12];
                const amounts = [4680, 3080, 2220, 1480];
                return (
                  <div
                    key={category.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full ${category.bg} flex items-center justify-center`}
                      >
                        <category.icon
                          className={`h-4 w-4 ${category.color}`}
                        />
                      </div>
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{amounts[index]}</p>
                      <p className="text-sm text-gray-500">
                        {percentages[index]}%
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-violet-600" />
              Monthly Trend
            </CardTitle>
            <CardDescription>Last 6 months spending</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map(
                (month, index) => {
                  const amounts = [11200, 13400, 9800, 15600, 14200, 12430];
                  const isCurrentMonth = month === "Jan";
                  return (
                    <div
                      key={month}
                      className="flex items-center justify-between"
                    >
                      <span
                        className={`font-medium ${isCurrentMonth ? "text-violet-600" : "text-gray-700"}`}
                      >
                        {month} 2024
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-gray-100 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${isCurrentMonth ? "bg-violet-500" : "bg-gray-300"}`}
                            style={{
                              width: `${(amounts[index] / 16000) * 100}%`,
                            }}
                          />
                        </div>
                        <span
                          className={`font-semibold min-w-[70px] text-right ${isCurrentMonth ? "text-violet-600" : "text-gray-900"}`}
                        >
                          ₹{amounts[index].toLocaleString()}
                        </span>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
