import { useState } from 'react';
import { Heart, Clock, ChefHat } from 'lucide-react';
import { Recipe } from '@/lib/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [liked, setLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(recipe.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const formatTime = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-3 flex flex-row items-center space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={recipe.author.avatar} alt={recipe.author.name} />
          <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="font-medium text-sm">{recipe.author.name}</div>
      </CardHeader>
      
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <CardContent className="p-3 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 p-0" 
              onClick={handleLike}
            >
              <Heart className={`h-6 w-6 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatTime(recipe.prepTime + recipe.cookTime)}</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="h-4 w-4 mr-1" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
        
        <h3 className="font-bold text-lg">{recipe.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{recipe.description}</p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {recipe.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {recipe.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{recipe.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0 text-sm text-muted-foreground">
        <div className="flex justify-between w-full">
          <span>{likesCount} likes</span>
        </div>
      </CardFooter>
    </Card>
  );
} 