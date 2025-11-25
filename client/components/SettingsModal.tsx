import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Moon, Bell, Lock, Volume2 } from "lucide-react";

interface SettingsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsModal({ isOpen, onOpenChange }: SettingsModalProps) {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    emailNotifications: false,
    soundEnabled: true,
    privacy: "private",
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: typeof prev[key] === "boolean" ? !prev[key] : prev[key],
    }));
  };

  const handlePrivacyChange = (value: string) => {
    setSettings((prev) => ({ ...prev, privacy: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-2 border-white rounded-xl max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground text-lg">
            Settings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Dark Mode */}
          <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <Moon size={18} className="text-foreground/70" />
              <div>
                <p className="text-sm font-medium text-foreground">Dark Mode</p>
                <p className="text-xs text-foreground/50">Always enabled</p>
              </div>
            </div>
            <div className="w-10 h-6 bg-white/20 rounded-full flex items-center justify-end p-1 cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full transition-transform" />
            </div>
          </div>

          {/* Notifications */}
          <div
            onClick={() => toggleSetting("notifications")}
            className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-foreground/70" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Notifications
                </p>
                <p className="text-xs text-foreground/50">In-app alerts</p>
              </div>
            </div>
            <div
              className={`w-10 h-6 rounded-full flex items-center transition-all ${
                settings.notifications ? "bg-white/30" : "bg-white/10"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.notifications ? "translate-x-4" : ""
                }`}
              />
            </div>
          </div>

          {/* Email Notifications */}
          <div
            onClick={() => toggleSetting("emailNotifications")}
            className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Lock size={18} className="text-foreground/70" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Email Updates
                </p>
                <p className="text-xs text-foreground/50">Weekly digest</p>
              </div>
            </div>
            <div
              className={`w-10 h-6 rounded-full flex items-center transition-all ${
                settings.emailNotifications ? "bg-white/30" : "bg-white/10"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.emailNotifications ? "translate-x-4" : ""
                }`}
              />
            </div>
          </div>

          {/* Sound */}
          <div
            onClick={() => toggleSetting("soundEnabled")}
            className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Volume2 size={18} className="text-foreground/70" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Sound Effects
                </p>
                <p className="text-xs text-foreground/50">Message alerts</p>
              </div>
            </div>
            <div
              className={`w-10 h-6 rounded-full flex items-center transition-all ${
                settings.soundEnabled ? "bg-white/30" : "bg-white/10"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.soundEnabled ? "translate-x-4" : ""
                }`}
              />
            </div>
          </div>

          {/* Privacy */}
          <div className="p-3 hover:bg-white/5 rounded-lg transition-colors">
            <p className="text-sm font-medium text-foreground mb-2">Privacy</p>
            <select
              value={settings.privacy}
              onChange={(e) => handlePrivacyChange(e.target.value)}
              className="w-full bg-background border border-white/30 rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:border-white transition-colors"
            >
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
              <option value="public">Public</option>
            </select>
          </div>

          {/* Info */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-foreground/60">
              Settings are saved automatically. Changes may take a few seconds
              to sync across devices.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
