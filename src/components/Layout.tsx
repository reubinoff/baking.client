import React from 'react';
import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6ee]"> {/* Lighter wheat color */}
      <TopBar />
      <main className="flex-1 container mx-auto px-4 pt-16 pb-20"> {/* Added padding to account for fixed navigation */}
        {children}
      </main>
      <BottomNav />
    </div>
  );
} 