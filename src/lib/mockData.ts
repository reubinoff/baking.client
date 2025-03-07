export interface RecipeStep {
  instruction: string;
  ingredients?: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  ingredients: string[];
  steps?: RecipeStep[];
  instructions: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  tags: string[];
  createdAt: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies with a soft center and crispy edges.',
    imageUrl: 'https://picsum.photos/200',
    author: {
      name: 'Sarah Baker',
      avatar: 'https://i.pravatar.cc/307'
    },
    likes: 1240,
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups semi-sweet chocolate chips'
    ],
    steps: [
      {
        instruction: 'Preheat oven to 375°F (190°C).',
        ingredients: []
      },
      {
        instruction: 'Combine flour, baking soda, and salt in a small bowl.',
        ingredients: ['flour', 'baking soda', 'salt']
      },
      {
        instruction: 'Beat butter, granulated sugar, and brown sugar in a large mixer bowl.',
        ingredients: ['butter', 'granulated sugar', 'brown sugar']
      },
      {
        instruction: 'Add eggs one at a time, beating well after each addition. Beat in vanilla.',
        ingredients: ['eggs', 'vanilla extract']
      },
      {
        instruction: 'Gradually beat in flour mixture. Stir in chocolate chips.',
        ingredients: ['flour mixture', 'chocolate chips']
      },
      {
        instruction: 'Drop by rounded tablespoon onto ungreased baking sheets.',
        ingredients: []
      },
      {
        instruction: 'Bake for 9 to 11 minutes or until golden brown.',
        ingredients: []
      },
      {
        instruction: 'Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.',
        ingredients: []
      }
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Combine flour, baking soda, and salt in a small bowl.',
      'Beat butter, granulated sugar, and brown sugar in a large mixer bowl.',
      'Add eggs one at a time, beating well after each addition. Beat in vanilla.',
      'Gradually beat in flour mixture. Stir in chocolate chips.',
      'Drop by rounded tablespoon onto ungreased baking sheets.',
      'Bake for 9 to 11 minutes or until golden brown.',
      'Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.'
    ],
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 10,
    tags: ['cookies', 'chocolate', 'dessert', 'classic'],
    createdAt: '2023-06-15T14:30:00Z'
  },
  {
    id: '2',
    title: 'Sourdough Bread',
    description: 'Artisanal sourdough bread with a crispy crust and chewy interior.',
    imageUrl: 'https://picsum.photos/201',
    author: {
      name: 'Mark Breadman',
      avatar: 'https://i.pravatar.cc/306'
    },
    likes: 892,
    ingredients: [
      '500g bread flour',
      '350g water',
      '100g active sourdough starter',
      '10g salt'
    ],
    steps: [
      {
        instruction: 'Mix flour and water, let rest for 30 minutes (autolyse).',
        ingredients: ['flour', 'water']
      },
      {
        instruction: 'Add starter and salt, mix until combined.',
        ingredients: ['starter', 'salt']
      },
      {
        instruction: 'Perform stretch and folds every 30 minutes for 2-3 hours.',
        ingredients: []
      },
      {
        instruction: 'Shape the dough and place in a floured banneton.',
        ingredients: []
      },
      {
        instruction: 'Refrigerate overnight for 12-16 hours.',
        ingredients: []
      },
      {
        instruction: 'Preheat oven with Dutch oven to 500°F (260°C).',
        ingredients: []
      },
      {
        instruction: 'Score the dough and bake covered for 20 minutes.',
        ingredients: []
      },
      {
        instruction: 'Reduce temperature to 450°F (230°C) and bake uncovered for 20-25 minutes.',
        ingredients: []
      }
    ],
    instructions: [
      'Mix flour and water, let rest for 30 minutes (autolyse).',
      'Add starter and salt, mix until combined.',
      'Perform stretch and folds every 30 minutes for 2-3 hours.',
      'Shape the dough and place in a floured banneton.',
      'Refrigerate overnight for 12-16 hours.',
      'Preheat oven with Dutch oven to 500°F (260°C).',
      'Score the dough and bake covered for 20 minutes.',
      'Reduce temperature to 450°F (230°C) and bake uncovered for 20-25 minutes.'
    ],
    difficulty: 'Medium',
    prepTime: 180,
    cookTime: 45,
    tags: ['bread', 'sourdough', 'artisanal', 'fermented'],
    createdAt: '2023-07-22T09:15:00Z'
  },
  {
    id: '3',
    title: 'French Macarons',
    description: 'Delicate almond meringue cookies with a smooth ganache filling.',
    imageUrl: 'https://picsum.photos/202',
    author: {
      name: 'Claire Patisserie',
      avatar: 'https://i.pravatar.cc/305'
    },
    likes: 1567,
    ingredients: [
      '100g almond flour',
      '170g powdered sugar',
      '100g egg whites (about 3 large eggs)',
      '1/4 tsp cream of tartar',
      '50g granulated sugar',
      'Food coloring (optional)',
      '150g dark chocolate',
      '100ml heavy cream'
    ],
    steps: [
      {
        instruction: 'Sift almond flour and powdered sugar together.',
        ingredients: ['almond flour', 'powdered sugar']
      },
      {
        instruction: 'Beat egg whites with cream of tartar until foamy.',
        ingredients: ['egg whites', 'cream of tartar']
      },
      {
        instruction: 'Gradually add granulated sugar and beat until stiff peaks form.',
        ingredients: ['granulated sugar']
      },
      {
        instruction: 'Fold in dry ingredients and food coloring if using.',
        ingredients: ['almond flour', 'powdered sugar', 'food coloring']
      },
      {
        instruction: 'Pipe 1.5-inch rounds onto parchment-lined baking sheets.',
        ingredients: []
      },
      {
        instruction: 'Let sit for 30-60 minutes until a skin forms.',
        ingredients: []
      },
      {
        instruction: 'Bake at 300°F (150°C) for 15-18 minutes.',
        ingredients: []
      },
      {
        instruction: 'For ganache, heat cream and pour over chocolate. Stir until smooth.',
        ingredients: ['heavy cream', 'dark chocolate']
      },
      {
        instruction: 'Once cooled, sandwich cookies with ganache filling.'
      }
    ],
    instructions: [
      'Sift almond flour and powdered sugar together.',
      'Beat egg whites with cream of tartar until foamy.',
      'Gradually add granulated sugar and beat until stiff peaks form.',
      'Fold in dry ingredients and food coloring if using.',
      'Pipe 1.5-inch rounds onto parchment-lined baking sheets.',
      'Let sit for 30-60 minutes until a skin forms.',
      'Bake at 300°F (150°C) for 15-18 minutes.',
      'For ganache, heat cream and pour over chocolate. Stir until smooth.',
      'Once cooled, sandwich cookies with ganache filling.'
    ],
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 18,
    tags: ['cookies', 'french', 'dessert', 'chocolate'],
    createdAt: '2023-08-05T16:45:00Z'
  },
  {
    id: '4',
    title: 'Cinnamon Rolls',
    description: 'Soft and fluffy cinnamon rolls with cream cheese frosting.',
    imageUrl: 'https://picsum.photos/203',
    author: {
      name: 'Emma Sweets',
      avatar: 'https://i.pravatar.cc/304'
    },
    likes: 1103,
    ingredients: [
      '4 cups all-purpose flour',
      '1/3 cup granulated sugar',
      '1 tsp salt',
      '2 1/4 tsp instant yeast',
      '1 cup warm milk',
      '1/3 cup butter, softened',
      '2 eggs',
      '1 cup brown sugar',
      '2 1/2 tbsp ground cinnamon',
      '1/3 cup butter, softened',
      '8 oz cream cheese, softened',
      '1/2 cup butter, softened',
      '2 cups powdered sugar',
      '1 tsp vanilla extract'
    ],
    steps: [
      {
        instruction: 'Mix flour, sugar, salt, and yeast in a large bowl.',
        ingredients: ['flour', 'sugar', 'salt', 'yeast']
      },
      {
        instruction: 'Add warm milk, butter, and eggs. Mix until a soft dough forms.',
        ingredients: ['warm milk', 'butter', 'eggs']
      },
      {
        instruction: 'Knead for 5-7 minutes until smooth and elastic.',
        ingredients: []
      },
      {
        instruction: 'Let rise in a warm place for 1 hour or until doubled in size.',
        ingredients: []
      },
      {
        instruction: 'Roll out dough into a 16x21 inch rectangle.',
        ingredients: []
      },
      {
        instruction: 'Spread with butter and sprinkle with cinnamon sugar mixture.',
        ingredients: ['butter', 'cinnamon sugar mixture']
      },
      {
        instruction: 'Roll up dough and cut into 12 rolls.',
        ingredients: []
      },
      {
        instruction: 'Place in a greased baking dish and let rise for 30 minutes.',
        ingredients: []
      },
      {
        instruction: 'Bake at 350°F (175°C) for 25-30 minutes.',
        ingredients: []
      },
      {
        instruction: 'Beat cream cheese, butter, powdered sugar, and vanilla for frosting.',
        ingredients: ['cream cheese', 'butter', 'powdered sugar', 'vanilla extract']
      },
      {
        instruction: 'Spread frosting on warm rolls before serving.'
      }
    ],
    instructions: [
      'Mix flour, sugar, salt, and yeast in a large bowl.',
      'Add warm milk, butter, and eggs. Mix until a soft dough forms.',
      'Knead for 5-7 minutes until smooth and elastic.',
      'Let rise in a warm place for 1 hour or until doubled in size.',
      'Roll out dough into a 16x21 inch rectangle.',
      'Spread with butter and sprinkle with cinnamon sugar mixture.',
      'Roll up dough and cut into 12 rolls.',
      'Place in a greased baking dish and let rise for 30 minutes.',
      'Bake at 350°F (175°C) for 25-30 minutes.',
      'Beat cream cheese, butter, powdered sugar, and vanilla for frosting.',
      'Spread frosting on warm rolls before serving.'
    ],
    difficulty: 'Medium',
    prepTime: 120,
    cookTime: 30,
    tags: ['breakfast', 'cinnamon', 'bread', 'frosting'],
    createdAt: '2023-09-12T08:20:00Z'
  },
  {
    id: '5',
    title: 'Lemon Tart',
    description: 'Tangy lemon curd in a buttery shortcrust pastry shell.',
    imageUrl: 'https://picsum.photos/204',
    author: {
      name: 'David Citrus',
      avatar: 'https://i.pravatar.cc/302'
    },
    likes: 756,
    ingredients: [
      '200g all-purpose flour',
      '100g cold butter, cubed',
      '30g powdered sugar',
      '1 egg yolk',
      '2-3 tbsp cold water',
      '4 eggs',
      '150g granulated sugar',
      'Zest of 2 lemons',
      '120ml lemon juice (about 3-4 lemons)',
      '100g butter, cubed'
    ],
    steps: [
      {
        instruction: 'For the pastry, mix flour, butter, and sugar until crumbly.',
        ingredients: ['flour', 'butter', 'sugar']
      },
      {
        instruction: 'Add egg yolk and water, mix until dough forms.',
        ingredients: ['egg yolk', 'water']
      },
      {
        instruction: 'Chill for 30 minutes, then roll out and line a 9-inch tart pan.',
        ingredients: []
      },
      {
        instruction: 'Blind bake at 350°F (175°C) for 15 minutes.',
        ingredients: []
      },
      {
        instruction: 'For the filling, whisk eggs, sugar, lemon zest, and juice in a heatproof bowl.',
        ingredients: ['eggs', 'sugar', 'lemon zest', 'lemon juice']
      },
      {
        instruction: 'Place over simmering water and stir until thickened.',
        ingredients: []
      },
      {
        instruction: 'Remove from heat and stir in butter until melted and smooth.',
        ingredients: ['butter']
      },
      {
        instruction: 'Pour filling into the pastry case and bake for 15-20 minutes until set.',
        ingredients: []
      },
      {
        instruction: 'Cool completely before serving.'
      }
    ],
    instructions: [
      'For the pastry, mix flour, butter, and sugar until crumbly.',
      'Add egg yolk and water, mix until dough forms.',
      'Chill for 30 minutes, then roll out and line a 9-inch tart pan.',
      'Blind bake at 350°F (175°C) for 15 minutes.',
      'For the filling, whisk eggs, sugar, lemon zest, and juice in a heatproof bowl.',
      'Place over simmering water and stir until thickened.',
      'Remove from heat and stir in butter until melted and smooth.',
      'Pour filling into the pastry case and bake for 15-20 minutes until set.',
      'Cool completely before serving.'
    ],
    difficulty: 'Medium',
    prepTime: 45,
    cookTime: 35,
    tags: ['tart', 'lemon', 'dessert', 'citrus'],
    createdAt: '2023-10-08T11:30:00Z'
  },
  {
    id: '6',
    title: 'Croissants',
    description: 'Flaky, buttery French pastries with a golden crust.',
    imageUrl: 'https://picsum.photos/205',
    author: {
      name: 'Pierre Boulanger',
      avatar: 'https://i.pravatar.cc/302'
    },
    likes: 1432,
    ingredients: [
      '500g bread flour',
      '10g salt',
      '55g sugar',
      '10g instant yeast',
      '300ml cold water',
      '250g cold unsalted butter',
      '1 egg (for egg wash)'
    ],
    steps: [
      {
        instruction: 'Mix flour, salt, sugar, yeast, and water until a dough forms.',
        ingredients: ['flour', 'salt', 'sugar', 'yeast', 'water']
      },
      {
        instruction: 'Knead for 5 minutes, then refrigerate for 1 hour.',
        ingredients: []
      },
      {
        instruction: 'Roll out butter between parchment paper into a rectangle.',
        ingredients: []
      },
      {
        instruction: 'Roll out dough and place butter in the center.',
        ingredients: []
      },
      {
        instruction: 'Fold dough over butter and seal edges (first lamination).',
        ingredients: []
      },
      {
        instruction: 'Roll out and fold in thirds (like a letter). Refrigerate for 1 hour.',
        ingredients: []
      },
      {
        instruction: 'Repeat rolling and folding two more times with 1-hour rests in between.',
        ingredients: []
      },
      {
        instruction: 'Roll out dough to 1/4 inch thickness and cut into triangles.',
        ingredients: []
      },
      {
        instruction: 'Roll triangles from base to tip and shape into crescents.',
        ingredients: []
      },
      {
        instruction: 'Let rise for 2 hours, then brush with egg wash.',
        ingredients: []
      },
      {
        instruction: 'Bake at 400°F (200°C) for 15-20 minutes until golden brown.'
      }
    ],
    instructions: [
      'Mix flour, salt, sugar, yeast, and water until a dough forms.',
      'Knead for 5 minutes, then refrigerate for 1 hour.',
      'Roll out butter between parchment paper into a rectangle.',
      'Roll out dough and place butter in the center.',
      'Fold dough over butter and seal edges (first lamination).',
      'Roll out and fold in thirds (like a letter). Refrigerate for 1 hour.',
      'Repeat rolling and folding two more times with 1-hour rests in between.',
      'Roll out dough to 1/4 inch thickness and cut into triangles.',
      'Roll triangles from base to tip and shape into crescents.',
      'Let rise for 2 hours, then brush with egg wash.',
      'Bake at 400°F (200°C) for 15-20 minutes until golden brown.'
    ],
    difficulty: 'Hard',
    prepTime: 360,
    cookTime: 20,
    tags: ['pastry', 'french', 'breakfast', 'butter'],
    createdAt: '2023-11-19T07:45:00Z'
  },
  {
    id: '7',
    title: 'Classic Tomato Soup',
    description: 'A comforting soup with a creamy base and fresh tomatoes.',
    imageUrl: 'https://picsum.photos/206',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/301'
    },
    likes: 987,
    ingredients: [
      '4 cups tomatoes, peeled and diced',
      '1 onion, diced',
      '2 cloves garlic, minced',
      '1 tsp olive oil',
      '1 tsp salt',
      '1 tsp pepper',
      '1 cup chicken broth',
      '1 cup heavy cream',
      '1/2 cup grated Parmesan cheese'
    ],
    steps: [
      {
        instruction: 'In a large pot, heat olive oil over medium heat.',
        ingredients: ['olive oil']
      },
      {
        instruction: 'Add onion and garlic, cook until fragrant.',
        ingredients: ['onion', 'garlic']
      },
      {
        instruction: 'Add tomatoes, salt, and pepper, cook until tomatoes are soft.',
        ingredients: ['tomatoes', 'salt', 'pepper']
      },
      {
        instruction: 'Add chicken broth and simmer for 15 minutes.',
        ingredients: ['chicken broth']
      },
      {
        instruction: 'Blend soup until smooth.',
        ingredients: []
      },
      {
        instruction: 'Add heavy cream and Parmesan cheese, stir until heated through.'
      }
    ],
    instructions: [
      'In a large pot, heat olive oil over medium heat.',
      'Add onion and garlic, cook until fragrant.',
      'Add tomatoes, salt, and pepper, cook until tomatoes are soft.',
      'Add chicken broth and simmer for 15 minutes.',
      'Blend soup until smooth.',
      'Add heavy cream and Parmesan cheese, stir until heated through.'
    ],
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 15,
    tags: ['soup', 'tomato', 'creamy', 'comfort'],
    createdAt: '2023-12-03T10:10:00Z'
  },
  {
    id: '8',
    title: 'Beef Wellington',
    description: 'Tender beef fillet wrapped in mushroom duxelles, prosciutto, and puff pastry.',
    imageUrl: 'https://picsum.photos/207',
    author: {
      name: 'Gordon Chef',
      avatar: 'https://i.pravatar.cc/310'
    },
    likes: 1876,
    ingredients: [
      '1.5kg beef fillet',
      '500g mushrooms, finely chopped',
      '4 shallots, finely chopped',
      '4 cloves garlic, minced',
      '8 slices prosciutto',
      '500g puff pastry',
      '2 egg yolks, beaten',
      '2 tbsp olive oil',
      '2 tbsp Dijon mustard',
      'Salt and pepper to taste'
    ],
    steps: [
      {
        instruction: 'Season beef with salt and pepper, then sear in hot oil until browned on all sides.',
        ingredients: ['beef', 'salt', 'pepper', 'oil']
      },
      {
        instruction: 'Cool beef completely, then brush with Dijon mustard.',
        ingredients: ['beef', 'Dijon mustard']
      },
      {
        instruction: 'Sauté mushrooms, shallots, and garlic until moisture evaporates.',
        ingredients: ['mushrooms', 'shallots', 'garlic']
      },
      {
        instruction: 'Lay out prosciutto slices overlapping, spread mushroom mixture on top.',
        ingredients: ['prosciutto', 'mushroom mixture']
      },
      {
        instruction: 'Place beef on mushroom mixture and wrap tightly. Refrigerate for 30 minutes.',
        ingredients: ['beef', 'mushroom mixture']
      },
      {
        instruction: 'Roll out puff pastry, place beef in center, and wrap pastry around beef.',
        ingredients: ['puff pastry', 'beef']
      },
      {
        instruction: 'Brush with beaten egg yolk and score the top with a knife.',
        ingredients: ['beaten egg yolk']
      },
      {
        instruction: 'Bake at 400°F (200°C) for 35-40 minutes until golden brown.',
        ingredients: []
      },
      {
        instruction: 'Rest for 10 minutes before slicing and serving.'
      }
    ],
    instructions: [
      'Season beef with salt and pepper, then sear in hot oil until browned on all sides.',
      'Cool beef completely, then brush with Dijon mustard.',
      'Sauté mushrooms, shallots, and garlic until moisture evaporates.',
      'Lay out prosciutto slices overlapping, spread mushroom mixture on top.',
      'Place beef on mushroom mixture and wrap tightly. Refrigerate for 30 minutes.',
      'Roll out puff pastry, place beef in center, and wrap pastry around beef.',
      'Brush with beaten egg yolk and score the top with a knife.',
      'Bake at 400°F (200°C) for 35-40 minutes until golden brown.',
      'Rest for 10 minutes before slicing and serving.'
    ],
    difficulty: 'Hard',
    prepTime: 90,
    cookTime: 40,
    tags: ['beef', 'pastry', 'gourmet', 'dinner'],
    createdAt: '2023-12-15T18:30:00Z'
  },
  {
    id: '9',
    title: 'Pad Thai',
    description: 'Classic Thai stir-fried noodles with a perfect balance of sweet, sour, and savory flavors.',
    imageUrl: 'https://picsum.photos/208',
    author: {
      name: 'Suki Thai',
      avatar: 'https://i.pravatar.cc/311'
    },
    likes: 1543,
    ingredients: [
      '200g rice noodles',
      '200g chicken breast, sliced',
      '2 eggs, beaten',
      '100g bean sprouts',
      '4 green onions, chopped',
      '50g roasted peanuts, crushed',
      '2 tbsp vegetable oil',
      '3 tbsp fish sauce',
      '3 tbsp tamarind paste',
      '2 tbsp palm sugar',
      '2 cloves garlic, minced',
      'Lime wedges for serving',
      'Fresh cilantro for garnish'
    ],
    steps: [
      {
        instruction: 'Soak rice noodles in warm water for 30 minutes, then drain.',
        ingredients: ['rice noodles', 'warm water']
      },
      {
        instruction: 'Mix fish sauce, tamarind paste, and palm sugar to make sauce.',
        ingredients: ['fish sauce', 'tamarind paste', 'palm sugar']
      },
      {
        instruction: 'Heat oil in a pan, add garlic and chicken. Cook until chicken is browned.',
        ingredients: ['oil', 'garlic', 'chicken']
      },
      {
        instruction: 'Add bean sprouts, green onions, and peanuts. Cook until fragrant.',
        ingredients: ['bean sprouts', 'green onions', 'peanuts']
      },
      {
        instruction: 'Add rice noodles and sauce. Stir fry until noodles are heated through.',
        ingredients: ['rice noodles', 'sauce']
      },
      {
        instruction: 'Garnish with lime wedges and cilantro.'
      }
    ],
    instructions: [
      'Soak rice noodles in warm water for 30 minutes, then drain.',
      'Mix fish sauce, tamarind paste, and palm sugar to make sauce.',
      'Heat oil in a pan, add garlic and chicken. Cook until chicken is browned.',
      'Add bean sprouts, green onions, and peanuts. Cook until fragrant.',
      'Add rice noodles and sauce. Stir fry until noodles are heated through.',
      'Garnish with lime wedges and cilantro.'
    ],
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 15,
    tags: ['thai', 'noodles', 'stir-fried', 'savory'],
    createdAt: '2024-01-20T12:45:00Z'
  },
  {
    id: '10',
    title: 'Pasta Carbonara',
    description: 'Creamy pasta with a rich egg and cheese sauce, topped with crispy bacon.',
    imageUrl: 'https://picsum.photos/209',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/312'
    },
    likes: 1234,
    ingredients: [
      '200g pasta', 
      '100g bacon, diced',
      '2 eggs',
      '1 cup grated Parmesan cheese',
      '1 cup heavy cream',
      '1 tsp salt',
      '1 tsp pepper'
    ],
    steps: [
      {
        instruction: 'Cook pasta according to package instructions.',
        ingredients: ['pasta']
      },
      {
        instruction: 'Fry bacon until crispy.',
        ingredients: ['bacon']
      },
      {
        instruction: 'Beat eggs and mix with Parmesan cheese.',
        ingredients: ['eggs', 'Parmesan cheese']
      },
      {
        instruction: 'Add heavy cream and mix with pasta.'
      }
    ],
    instructions: [
      'Cook pasta according to package instructions.',
      'Fry bacon until crispy.',
      'Beat eggs and mix with Parmesan cheese.',
      'Add heavy cream and mix with pasta.'
    ],
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 15,
    tags: ['pasta', 'carbonara', 'creamy', 'bacon'],
    createdAt: '2024-02-25T15:30:00Z'
  },
];

// Helper function to convert steps to instructions
function _stepsToInstructions(steps: RecipeStep[]): string[] {
  return steps.map(step => step.instruction);
}
