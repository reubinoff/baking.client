import React from "react";
import { Home, Heart, PlusCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  className?: string;
}

export function BottomNav({ className }: BottomNavProps) {
  const [activeTab, setActiveTab] = React.useState<string>("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "new", label: "New Recipe", icon: PlusCircle },
    { id: "account", label: "Account", icon: User },
  ];

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-[hsl(var(--wheat-light))] border-t border-border py-2 px-4 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-md transition-colors",
              activeTab === item.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
