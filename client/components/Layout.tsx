import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Receipt,
  Settings,
  User,
  TrendingUp,
  Wallet,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Add Expense", href: "/add-expense", icon: PlusCircle },
  { name: "Records", href: "/records", icon: Receipt },
  { name: "Analytics", href: "/analytics", icon: TrendingUp },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white/80 backdrop-blur-xl border-r border-gray-200/50 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  ExpenseTracker
                </h1>
                <p className="text-xs text-gray-500">Smart Money Management</p>
              </div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={cn(
                            isActive
                              ? "gradient-primary text-white shadow-lg"
                              : "text-gray-700 hover:text-violet-600 hover:bg-violet-50",
                            "group flex gap-x-3 rounded-xl p-3 text-sm leading-6 font-medium transition-all duration-200",
                          )}
                        >
                          <item.icon
                            className={cn(
                              isActive
                                ? "text-white"
                                : "text-gray-400 group-hover:text-violet-600",
                              "h-5 w-5 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>

          {/* User Profile Section */}
          <div className="mt-auto">
            <Link
              to="/profile"
              className="flex items-center gap-x-3 rounded-xl p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="sr-only">Your profile</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-gray-500">john@example.com</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl px-4 shadow-sm sm:gap-x-6 sm:px-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg gradient-primary flex items-center justify-center">
              <Wallet className="w-3 h-3 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              ExpenseTracker
            </h1>
          </div>
        </div>

        {/* Mobile sidebar */}
        {mobileMenuOpen && (
          <div className="relative z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-gray-900/80"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="fixed inset-0 flex">
              <div className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <X className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                          ExpenseTracker
                        </h1>
                        <p className="text-xs text-gray-500">
                          Smart Money Management
                        </p>
                      </div>
                    </div>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={cn(
                                    isActive
                                      ? "gradient-primary text-white shadow-lg"
                                      : "text-gray-700 hover:text-violet-600 hover:bg-violet-50",
                                    "group flex gap-x-3 rounded-xl p-3 text-sm leading-6 font-medium transition-all duration-200",
                                  )}
                                >
                                  <item.icon
                                    className={cn(
                                      isActive
                                        ? "text-white"
                                        : "text-gray-400 group-hover:text-violet-600",
                                      "h-5 w-5 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <main className="lg:pl-72">
        <div className="xl:pl-96">
          <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
