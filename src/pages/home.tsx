import { mockRecipes } from '@/lib/mockData';
import { RecipeGrid } from '@/components/RecipeGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Baking Delights
          </h1>
        </div>
        <RecipeGrid recipes={mockRecipes} />
      </div>
    </div>
  );
}
