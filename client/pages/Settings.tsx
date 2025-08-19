import { Settings as SettingsIcon } from 'lucide-react';
import { Placeholder } from '@/components/Placeholder';

export default function Settings() {
  return (
    <Placeholder
      title="Settings"
      description="Customize your expense categories, payment methods, notifications, currency preferences, and app settings to fit your needs."
      icon={SettingsIcon}
    />
  );
}
