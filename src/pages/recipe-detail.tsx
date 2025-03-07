import { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { mockRecipes, Recipe } from '@/lib/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, ChefHat, Utensils, ScrollText, ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { TopBar } from '@/components/TopBar';
import { BottomNav } from '@/components/BottomNav';

export default function RecipeDetail() {
  const [, params] = useRoute('/recipe/:id');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [usedIngredients, setUsedIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [recipeId, setRecipeId] = useState<string | null>(null);

  // Load recipe data when the route params change
  useEffect(() => {
    if (params && params.id && params.id !== recipeId) {
      setLoading(true);
      setRecipeId(params.id);
      const foundRecipe = mockRecipes.find(r => r.id === params.id);
      
      // Reset states
      setImageLoaded(false);
      setUsedIngredients([]);
      
      // Set recipe and loading state in a single render cycle
      setRecipe(foundRecipe || null);
      setLoading(false);
    }
  }, [params, recipeId]);

  // Preload the image when recipe changes
  useEffect(() => {
    if (recipe && !imageLoaded) {
      const img = new Image();
      img.src = recipe.imageUrl;
      img.onload = () => setImageLoaded(true);
    }
  }, [recipe, imageLoaded]);

  const toggleIngredientUsed = (ingredient: string): void => {
    setUsedIngredients(prevIngredients => {
      if (prevIngredients.includes(ingredient)) {
        // Remove the ingredient if it's already in the list
        return prevIngredients.filter(item => item !== ingredient);
      } else {
        // Add the ingredient if it's not in the list
        return [...prevIngredients, ingredient];
      }
    });
  };

  // Check if an ingredient is marked as used
  const isIngredientUsed = (ingredient: string): boolean => {
    return usedIngredients.includes(ingredient);
  };

  const formatTime = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes} minutes`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 
      ? `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}` 
      : `${hours} hour${hours > 1 ? 's' : ''}`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const getIngredientEmoji = (ingredient: string): string => {
    const emojiMap: Record<string, string> = {
      flour: '🌾',
      sugar: '🍬',
      salt: '🧂',
      butter: '🧈',
      egg: '🥚',
      eggs: '🥚',
      vanilla: '🌱',
      chocolate: '🍫',
      milk: '🥛',
      cream: '🍶',
      water: '💧',
      oil: '🫙',
      yeast: '🧫',
      cinnamon: '🌰',
      lemon: '🍋',
      orange: '🍊',
      beef: '🥩',
      chicken: '🍗',
      pasta: '🍝',
      rice: '🍚',
      tomato: '🍅',
      tomatoes: '🍅',
      garlic: '🧄',
      onion: '🧅',
      cheese: '🧀',
      bacon: '🥓',
      mushroom: '🍄',
      mushrooms: '🍄',
    };

    for (const [key, emoji] of Object.entries(emojiMap)) {
      if (ingredient.toLowerCase().includes(key)) {
        return emoji;
      }
    }

    return '🍽️';
  };

  if (loading) {
    return (
      <div className="app-background">
        <TopBar />
        <div className="container mx-auto px-4 py-8 pt-16 pb-24">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-[hsl(var(--wheat-medium))] rounded mb-4"></div>
            <div className="h-6 w-full bg-[hsl(var(--wheat-mild))] rounded mb-6"></div>
            <div className="h-64 w-full bg-[hsl(var(--wheat-soft))] rounded mb-6 border border-[hsl(var(--wheat-medium))]"></div>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="app-background">
        <TopBar />
        <div className="container mx-auto px-4 py-8 pt-16 pb-24 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-wheat-medium mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => window.location.href = '/'}>
            Back to Recipes
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="app-background">
      <TopBar />
      <div className="container mx-auto px-4 py-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-2 mb-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={recipe.author.avatar} alt={recipe.author.name} />
              <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-sm">{recipe.author.name}</div>
              <div className="text-xs text-wheat-medium">Posted on {formatDate(recipe.createdAt)}</div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-wheat-medium mb-6">{recipe.description}</p>

          <div className="rounded-md overflow-hidden relative mb-6" style={{ height: '350px' }}>
            {!imageLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center bg-[hsl(var(--wheat-soft))] h-full w-full">
                <Skeleton className="absolute inset-0 w-full h-full bg-[hsl(var(--wheat-mild))]" />
                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                  <ImageIcon className="h-10 w-10 text-[hsl(var(--wheat-text-light))] animate-pulse" />
                  <div className="h-2 w-24 bg-[hsl(var(--wheat-medium))] rounded-full animate-pulse" />
                  <div className="h-2 w-16 bg-[hsl(var(--wheat-medium))] rounded-full animate-pulse" />
                </div>
              </div>
            ) : (
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title} 
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.tags.map((tag) => (
              <Badge key={tag} className="wheat-badge">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="recipe-card">
              <Clock className="h-5 w-5 mb-1 text-wheat-medium" />
              <div className="text-xs text-center">
                <div className="font-medium text-wheat-dark">Total Time</div>
                <div>{formatTime(recipe.prepTime + recipe.cookTime)}</div>
              </div>
            </div>
            <div className="recipe-card">
              <ChefHat className="h-5 w-5 mb-1 text-wheat-medium" />
              <div className="text-xs text-center">
                <div className="font-medium text-wheat-dark">Difficulty</div>
                <div>{recipe.difficulty}</div>
              </div>
            </div>
            <div className="recipe-card">
              <Utensils className="h-5 w-5 mb-1 text-wheat-medium" />
              <div className="text-xs text-center">
                <div className="font-medium text-wheat-dark">Prep Time</div>
                <div>{formatTime(recipe.prepTime)}</div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <Tabs defaultValue="ingredients">
            <TabsList className="wheat-tabs-list grid w-full grid-cols-2">
              <TabsTrigger value="ingredients" className="wheat-tabs-trigger flex items-center">
                <ScrollText className="h-4 w-4 mr-2 text-wheat-medium" />
                Ingredients
              </TabsTrigger>
              <TabsTrigger value="instructions" className="wheat-tabs-trigger flex items-center">
                <Utensils className="h-4 w-4 mr-2 text-wheat-medium" />
                Instructions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="mt-4">
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => {
                  const isUsed = isIngredientUsed(ingredient);
                  
                  // Try to split the ingredient into quantity and name
                  const parts = ingredient.match(/^([\d./]+ ?[a-zA-Z]* )?(.+)$/);
                  const quantity = parts && parts[1] ? parts[1].trim() : '';
                  const name = parts && parts[2] ? parts[2].trim() : ingredient;
                  
                  return (
                    <li 
                      key={index} 
                      className="ingredient-item"
                      onClick={() => toggleIngredientUsed(ingredient)}
                      title={isUsed ? "Click to mark as unused" : "Click to mark as used"}
                    >
                      <span className="inline-flex items-center justify-center h-8 w-8 text-lg mr-3">
                        {getIngredientEmoji(name)}
                      </span>
                      <span className={`text-md ${isUsed ? 'line-through text-wheat-light' : ''}`}>
                        {quantity && <strong>{quantity}</strong>} {name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent value="instructions" className="mt-4">
              {recipe.steps ? (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold mb-8">Directions</h2>
                  {recipe.steps.map((step, index) => (
                    <div key={index} className="mb-12">
                      <div className="mb-4 flex items-center">
                        <div className="mr-4 text-3xl font-light text-primary/80">{index + 1}</div>
                        <div className="step-divider"></div>
                      </div>
                      
                      {step.ingredients && step.ingredients.length > 0 && (
                        <div className="ingredients-section">
                          <ul className="space-y-2 pl-2">
                            {step.ingredients.map((ingredient, idx) => {
                              const isWhiskey = ingredient.toLowerCase().includes('whiskey');
                              const isUsed = isIngredientUsed(ingredient);
                              return (
                                <li 
                                  key={idx} 
                                  className="ingredient-item"
                                  onClick={() => toggleIngredientUsed(ingredient)}
                                  title={isUsed ? "Click to mark as unused" : "Click to mark as used"}
                                >
                                  <span className="inline-flex items-center justify-center h-7 w-7 text-lg opacity-80">
                                    {getIngredientEmoji(ingredient)}
                                  </span>
                                  <span className={`text-md ${isWhiskey || isUsed ? 'line-through text-wheat-light' : 'text-wheat-dark'}`}>
                                    {ingredient}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                      
                      <p className="text-lg leading-relaxed pl-2">{step.instruction}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="mb-6">
                      <div className="mb-2 flex items-center">
                        <div className="mr-4 text-xl font-semibold">Step {index + 1}</div>
                      </div>
                      <p className="text-lg leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNav />
    </div>
  );
} 