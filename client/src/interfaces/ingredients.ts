export interface IIngredientOption {
  name: string;
  enabled: boolean;
}

export interface IRecipe {
  id: number;
  name: string;
  url: string;
  img_url: string;
  time_values: string[];
  servings: string;
  description: string;
  ingredients: string[];
  nutritions: string[];
  instructions: string;
  posted_at: string; // "2022-11-13T17:01:43.210Z";
}

export interface IRecipesPaginatedResponse {
  items: IRecipe[];
  total: number;
  page: number;
  size: number;
}
