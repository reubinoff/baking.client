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
  }
];
