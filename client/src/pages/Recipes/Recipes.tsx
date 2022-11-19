import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import RecipesHeader from "../../components/headers/RecipesHeader/RecipesHeader";
import Tabs from "../../components/tabs/Tabs";
import SearchInput from "../../components/fields/SearchInput/SearchInput";
import RecipeCard from "../../components/cards/RecipeCard/RecipeCard";
import RecipeLiked from "../../components/recipes/RecipeLiked/RecipeLiked";
import RecipeSpecial from "../../components/recipes/RecipeSpecial/RecipeSpecial";
import Spinner from "../../components/spinner/Spinner";
import LeftBar from "../../components/LeftBar/LeftBar";
import { AppDispatch, RootState } from "../../store";

import { IRecipe } from "../../interfaces/ingredients";
import { getRecipes, recipeSearch } from "../../store/actions/ingredients";
import s from "./Recipes.module.scss";

export default function Recipes() {
  const [name, setName] = useState<string>("");
  const recipes = useSelector<RootState>(
    (state) => state.recipesSlice.recipes
  ) as IRecipe[];
  const dispatch = useDispatch<AppDispatch>();

  const { t } = useTranslation();

  const handleRecipeNameChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);

      setTimeout(() => {
        dispatch(recipeSearch({ name: e.target.value }));
      }, 500);
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      <RecipesHeader />

      <div className={s.wrapper}>
        <div className={s.tabs}>
          <Tabs withEdit>
            <div title={t("Search")}>
              <section className={s.mainContent}>
                <LeftBar />

                <div className={s.mainContentRight}>
                  <SearchInput
                    withFilter
                    onChange={handleRecipeNameChange}
                    value={name}
                    placeholder={"Search recipes..."}
                  />

                  <div className={s.recipePanels}>
                    {recipes?.length > 0 ? (
                      recipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </section>
            </div>
            <div title={t("Liked")}>
              <section className={s.mainContent}>
                <RecipeLiked />
              </section>
            </div>
            <div title={t("For you")}>
              <RecipeSpecial />
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
