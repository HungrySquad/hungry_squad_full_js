import { createAsyncThunk } from "@reduxjs/toolkit";
import recipesAPI from "../../service/recipes";

const getRecipes = createAsyncThunk("recipesSlice/getRecipes", async () => {
  return await recipesAPI.getRecipes();
});

const getRecipeById = createAsyncThunk(
  "recipesSlice/getRecipeById",
  async ({ id }: { id: number }) => {
    return await recipesAPI.getRecipeById(id);
  }
);

const recipeSearch = createAsyncThunk(
  "recipesSlice/recipeSearch",
  async ({ name }: { name: string }) => {
    return await recipesAPI.recipeSearch(name);
  }
);

export { getRecipes, getRecipeById, recipeSearch };
