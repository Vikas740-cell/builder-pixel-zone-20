import { LucideIcon } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function Placeholder({ title, description, icon: Icon }: PlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-violet-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        {description}
      </p>
      <div className="px-6 py-3 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl">
        <p className="text-sm text-violet-700">
          💡 Continue prompting me to build out this page with all the features you need!
        </p>
      </div>
    </div>
  );
}
