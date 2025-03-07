import React from 'react';
import { Bell, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLocation, useRoute } from 'wouter';

interface TopBarProps {
  className?: string;
}

export function TopBar({ className }: TopBarProps) {
  const [location, setLocation] = useLocation();
  const [isRecipeDetailMatch] = useRoute('/recipe/:id');

  const handleBackClick = () => {
    setLocation('/');
  };

  return (
    <div className={cn(
      'fixed top-0 left-0 right-0 bg-[hsl(var(--wheat-light))] border-b border-border py-2 px-4 z-50 shadow-sm',
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="w-8">
          {isRecipeDetailMatch && (
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleBackClick} aria-label="Back to recipes">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
        </div>
        <h1 className="text-lg font-semibold">Baking Delights</h1>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
} 