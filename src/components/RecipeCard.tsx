import React, { useState } from 'react';
import { Heart, Clock, ImageIcon } from 'lucide-react';
import { Recipe } from '@/lib/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { Skeleton } from '@/components/ui/skeleton';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [liked, setLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(recipe.likes);
  const [, setLocation] = useLocation();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleLike = (event: React.MouseEvent) => {
    // Stop event propagation to prevent navigating to the recipe detail
    event.stopPropagation();
    
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

  const handleCardClick = () => {
    setLocation(`/recipe/${recipe.id}`);
  };

  return (
    <Card 
      className="overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-[#f5f0e1] to-[#ede4d0]"
      onClick={handleCardClick}
    >
      <div className="relative aspect-square overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[hsl(var(--wheat-soft))] h-full w-full">
            <Skeleton className="absolute inset-0 w-full h-full bg-[hsl(var(--wheat-mild))]" />
            <div className="relative z-10 flex flex-col items-center justify-center gap-2">
              <ImageIcon className="h-10 w-10 text-[hsl(var(--wheat-text-light))] animate-pulse" />
              <div className="h-2 w-24 bg-[hsl(var(--wheat-medium))] rounded-full animate-pulse" />
              <div className="h-2 w-16 bg-[hsl(var(--wheat-medium))] rounded-full animate-pulse" />
            </div>
          </div>
        )}
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="object-cover w-full h-full"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        
        {/* Author overlay */}
        <div className="absolute top-0 left-0 p-3 flex items-center space-x-2 bg-gradient-to-r from-[#f5f0e1]/70 to-transparent text-[#5c4f3c] rounded-br-lg">
          <Avatar className="h-8 w-8 border border-[#5c4f3c]/50">
            <AvatarImage src={recipe.author.avatar} alt={recipe.author.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">{recipe.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="font-medium text-sm">{recipe.author.name}</div>
        </div>
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
          </div>
        </div>
        
        <h3 className="font-bold text-lg">{recipe.title}</h3>
      </CardContent>
    </Card>
  );
} 