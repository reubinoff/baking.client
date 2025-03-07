import { useState, useEffect } from 'react';
import { Recipe } from '@/lib/mockData';
import { RecipeCard } from './RecipeCard';
import { RecipeDetailDialog } from './RecipeDetailDialog';

interface RecipeGridProps {
  recipes: Recipe[];
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  // Check URL on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#recipe/')) {
      const recipeId = hash.replace('#recipe/', '');
      const recipe = recipes.find(r => r.id === recipeId);
      if (recipe) {
        setSelectedRecipe(recipe);
        setDialogOpen(true);
      }
    }
  }, [recipes]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#recipe/')) {
        const recipeId = hash.replace('#recipe/', '');
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) {
          setSelectedRecipe(recipe);
          setDialogOpen(true);
        }
      } else {
        setDialogOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [recipes]);

  const handleRecipeClick = (recipe: Recipe) => {
    // Push a new state to the history stack
    window.history.pushState({ recipeId: recipe.id }, '', `#recipe/${recipe.id}`);
    setSelectedRecipe(recipe);
    setDialogOpen(true);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open && dialogOpen) {
      // Go back to the home URL when dialog is closed
      window.history.pushState({}, '', window.location.pathname);
      setSelectedRecipe(null);
    }
    setDialogOpen(open);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          onOpenChange={handleDialogOpenChange} 
        />
      )}
    </>
  );
} 