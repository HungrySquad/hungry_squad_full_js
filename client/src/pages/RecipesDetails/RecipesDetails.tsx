import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import RecipesHeader from "../../components/headers/RecipesHeader/RecipesHeader";
import Tabs from "../../components/tabs/Tabs";
import RecipeHeader from "../../components/recipes/RecipesHeader/RecipeHeader";
import RecipeDetails from "../../components/recipes/RecipeDetails/RecipeDetails";
import s from "./RecipesDetails.module.scss";
import LeftBar from "../../components/LeftBar/LeftBar";
import RecipeCard from "../../components/cards/RecipeCard/RecipeCard";
import RecipeLiked from "../../components/recipes/RecipeLiked/RecipeLiked";
import RecipeSpecial from "../../components/recipes/RecipeSpecial/RecipeSpecial";
import { useEffect, useState } from "react";
import recipesAPI from "../../service/recipes";
import { IRecipe } from "../../interfaces/ingredients";
import Spinner from "../../components/spinner/Spinner";

export default function RecipesDetails() {
  const { t } = useTranslation();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      recipesAPI.getRecipeById(+params.id).then(setRecipe);
    }
  }, [params.id]);

  return (
    <>
      <RecipesHeader />

      <div className={s.wrapper}>
        <div className={s.tabs}>
          <Tabs withEdit>
            <div title={t("Search")}>
              <section className={s.mainContent}>
                <LeftBar />

                {recipe ? (
                  <div className={s.mainContentRight}>
                    <RecipeHeader recipeName={recipe.name} />

                    <div>
                      <RecipeDetails recipe={recipe} />

                      <div className={s.additionalRecipe}>
                        <p className={s.additionalRecipes}>You may also like</p>
                      </div>
                      <div className={s.recipePanels}>
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                      </div>
                    </div>
                  </div>
                ) : (
                  <Spinner />
                )}
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
