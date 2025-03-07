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
  const [usedIngredients, setUsedIngredients] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params && params.id) {
      const foundRecipe = mockRecipes.find(r => r.id === params.id);
      setRecipe(foundRecipe || null);
      setLoading(false);
      setImageLoaded(false);
      setUsedIngredients(new Set());
    }
  }, [params]);

  const toggleIngredientUsed = (ingredient: string): void => {
    setUsedIngredients(prevState => {
      const newState = new Set(prevState);
      if (newState.has(ingredient)) {
        newState.delete(ingredient);
      } else {
        newState.add(ingredient);
      }
      return newState;
    });
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
      <div className="min-h-screen bg-background">
        <TopBar />
        <div className="container mx-auto px-4 py-8 pt-16 pb-24">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 w-full bg-gray-200 rounded mb-6"></div>
            <div className="h-64 w-full bg-gray-200 rounded mb-6"></div>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <div className="container mx-auto px-4 py-8 pt-16 pb-24 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => window.location.href = '/'}>
            Back to Recipes
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
              <div className="text-xs text-muted-foreground">Posted on {formatDate(recipe.createdAt)}</div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-muted-foreground mb-6">{recipe.description}</p>

          <div className="rounded-md overflow-hidden relative mb-6" style={{ height: '350px' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted h-full w-full">
                <Skeleton className="absolute inset-0 w-full h-full" />
                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                  <ImageIcon className="h-10 w-10 text-muted-foreground/50 animate-pulse" />
                  <div className="h-2 w-24 bg-muted-foreground/20 rounded-full animate-pulse" />
                  <div className="h-2 w-16 bg-muted-foreground/20 rounded-full animate-pulse" />
                </div>
              </div>
            )}
            <img 
              src={recipe.imageUrl} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-md">
              <Clock className="h-5 w-5 mb-1" />
              <div className="text-xs text-center">
                <div className="font-medium">Total Time</div>
                <div>{formatTime(recipe.prepTime + recipe.cookTime)}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-md">
              <ChefHat className="h-5 w-5 mb-1" />
              <div className="text-xs text-center">
                <div className="font-medium">Difficulty</div>
                <div>{recipe.difficulty}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-md">
              <Utensils className="h-5 w-5 mb-1" />
              <div className="text-xs text-center">
                <div className="font-medium">Prep Time</div>
                <div>{formatTime(recipe.prepTime)}</div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <Tabs defaultValue="ingredients">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ingredients" className="flex items-center">
                <ScrollText className="h-4 w-4 mr-2" />
                Ingredients
              </TabsTrigger>
              <TabsTrigger value="instructions" className="flex items-center">
                <Utensils className="h-4 w-4 mr-2" />
                Instructions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="mt-4">
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => {
                  const isUsed = usedIngredients.has(ingredient);
                  
                  // Try to split the ingredient into quantity and name
                  const parts = ingredient.match(/^([\d./]+ ?[a-zA-Z]* )?(.+)$/);
                  const quantity = parts && parts[1] ? parts[1].trim() : '';
                  const name = parts && parts[2] ? parts[2].trim() : ingredient;
                  
                  return (
                    <li 
                      key={index} 
                      className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                      onClick={() => toggleIngredientUsed(ingredient)}
                      title={isUsed ? "Click to mark as unused" : "Click to mark as used"}
                    >
                      <span className="inline-flex items-center justify-center h-8 w-8 text-lg mr-3">
                        {getIngredientEmoji(name)}
                      </span>
                      <span className={`text-md ${isUsed ? 'line-through text-gray-400' : ''}`}>
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
                        <div className="h-0.5 flex-grow bg-gray-100"></div>
                      </div>
                      
                      {step.ingredients && step.ingredients.length > 0 && (
                        <div className="mb-5 mt-3 bg-gray-50 rounded-md p-3">
                          <ul className="space-y-2 pl-2">
                            {step.ingredients.map((ingredient, idx) => {
                              const isWhiskey = ingredient.toLowerCase().includes('whiskey');
                              const isUsed = usedIngredients.has(ingredient);
                              return (
                                <li 
                                  key={idx} 
                                  className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors"
                                  onClick={() => toggleIngredientUsed(ingredient)}
                                  title={isUsed ? "Click to mark as unused" : "Click to mark as used"}
                                >
                                  <span className="inline-flex items-center justify-center h-7 w-7 text-lg opacity-80">
                                    {getIngredientEmoji(ingredient)}
                                  </span>
                                  <span className={`text-md ${isWhiskey || isUsed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
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