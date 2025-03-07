import { useState, useEffect } from 'react';
import { Recipe } from '@/lib/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, ChefHat, Utensils, ScrollText, ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

interface RecipeDetailDialogProps {
  recipe: Recipe;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeDetailDialog({ recipe, open, onOpenChange }: RecipeDetailDialogProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // Reset image loaded state when dialog opens with a new recipe
  useEffect(() => {
    if (open) {
      setImageLoaded(false);
    }
  }, [open, recipe.id]);

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
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
          <DialogTitle className="text-2xl font-bold">{recipe.title}</DialogTitle>
          <p className="text-muted-foreground mt-2">{recipe.description}</p>
        </DialogHeader>

        <div className="mt-4 rounded-md overflow-hidden relative" style={{ height: '250px' }}>
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
            className={`w-full h-full object-cover ${!imageLoaded ? 'invisible' : ''}`}
            style={{ maxHeight: '250px', display: imageLoaded ? 'block' : 'none' }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
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

        <Separator className="my-4" />

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
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="instructions" className="mt-4">
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-3">
                    {index + 1}
                  </span>
                  <span className="flex-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
} 