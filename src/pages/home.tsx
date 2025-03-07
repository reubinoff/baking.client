import { mockRecipes } from '@/lib/mockData';
import { RecipeGrid } from '@/components/RecipeGrid';
import { TopBar } from '@/components/TopBar';
import { BottomNav } from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <div className="container mx-auto px-4 py-8 pt-16 pb-24">
        <RecipeGrid recipes={mockRecipes} />
      </div>
      <BottomNav />
    </div>
  );
}
