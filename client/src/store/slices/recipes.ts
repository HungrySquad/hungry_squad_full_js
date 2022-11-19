import { IRecipe } from "./../../interfaces/ingredients";
import { createSlice } from "@reduxjs/toolkit";
import { getRecipes, recipeSearch } from "../actions/ingredients";

export interface RecipesState {
  recipes: IRecipe[];
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: "recipesSlice",
  initialState,
  reducers: {
    setRecipes(state, action) {
      state.recipes = action.payload.recipes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      if (action.payload) {
        state.recipes = action.payload.items;
      }
    });
    builder.addCase(recipeSearch.fulfilled, (state, action) => {
      if (action.payload) {
        state.recipes = action.payload.items;
      }
    });
  },
});

export const { setRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
