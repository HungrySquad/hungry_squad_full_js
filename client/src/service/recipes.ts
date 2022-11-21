import { IRecipe, IRecipesPaginatedResponse } from "../interfaces/ingredients";

class RecipesAPI {
  public async getRecipes(): Promise<null | IRecipesPaginatedResponse> {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_RECIPES_URL}/recipies/?page=1&size=51`,
        {
          method: "GET",
        }
      );

      return await response.json();
    } catch (e) {
      return null;
    }
  }

  public async getRecipeById(id: number): Promise<null | IRecipe> {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_RECIPES_URL}/recipies/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      return response.json();
    } catch (e) {
      return null;
    }
  }

  public async recipeSearch(
    name: string
  ): Promise<null | IRecipesPaginatedResponse> {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_RECIPES_URL}/recipies/search/${name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return await response.json();
    } catch (e) {
      return null;
    }
  }
}

const recipesAPI = new RecipesAPI();

export default recipesAPI;
