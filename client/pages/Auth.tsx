import { useState } from "react";
import {
  Mail,
  Phone,
  Eye,
  EyeOff,
  Wallet,
  ArrowRight,
  Shield,
  Smartphone,
  CheckCircle,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");

  const features = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is encrypted and protected",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your expenses anywhere, anytime",
    },
    {
      icon: CheckCircle,
      title: "Smart Categorization",
      description: "AI-powered expense categorization and insights",
    },
  ];

  const handleGoogleAuth = () => {
    // In a real app, this would integrate with Google OAuth
    console.log("Google authentication would happen here");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log("Form submission:", {
      authMethod,
      email,
      phone,
      password,
      isSignUp,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:block space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  ExpenseTracker
                </h1>
                <p className="text-gray-600">Smart Money Management</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Take control of your{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                financial future
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Track expenses, analyze spending patterns, and make smarter
              financial decisions with our AI-powered insights.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0 animate-bounce-in">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
            <CardHeader className="text-center space-y-2">
              <div className="lg:hidden flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  ExpenseTracker
                </h1>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {isSignUp
                  ? "Start your journey to better financial management"
                  : "Sign in to your account to continue"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Google Sign In */}
              <Button
                onClick={handleGoogleAuth}
                variant="outline"
                className="w-full h-12 border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Auth Method Tabs */}
              <Tabs
                value={authMethod}
                onValueChange={(value) =>
                  setAuthMethod(value as "email" | "phone")
                }
              >
                <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                  <TabsTrigger
                    value="email"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </TabsTrigger>
                  <TabsTrigger
                    value="phone"
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Phone
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <TabsContent value="email" className="space-y-4 mt-0">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="phone" className="space-y-4 mt-0">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                  </TabsContent>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {isSignUp && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 gradient-primary hover:opacity-90 transition-opacity text-white font-medium"
                  >
                    {isSignUp ? "Create Account" : "Sign In"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Tabs>

              {!isSignUp && (
                <div className="text-center">
                  <Button
                    variant="link"
                    className="text-violet-600 hover:text-violet-700"
                  >
                    Forgot your password?
                  </Button>
                </div>
              )}

              <div className="text-center text-sm text-gray-600">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
              </div>

              {isSignUp && (
                <p className="text-xs text-gray-500 text-center">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-violet-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-violet-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
