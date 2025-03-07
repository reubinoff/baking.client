import { useState } from 'react';
import { Recipe } from '@/lib/mockData';
import { RecipeCard } from './RecipeCard';
import { RecipeDetailDialog } from './RecipeDetailDialog';

interface RecipeGridProps {
  recipes: Recipe[];
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setDialogOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => handleRecipeClick(recipe)}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
      
      {selectedRecipe && (
        <RecipeDetailDialog 
          recipe={selectedRecipe} 
          open={dialogOpen} 
          onOpenChange={setDialogOpen} 
        />
      )}
    </div>
  );
} 