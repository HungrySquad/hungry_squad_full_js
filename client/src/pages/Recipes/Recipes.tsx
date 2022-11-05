import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { take } from "lodash";

import RecipesHeader from "../../components/headers/RecipesHeader/RecipesHeader";
import Tabs from "../../components/tabs/Tabs";
import SearchInput from "../../components/fields/SearchInput/SearchInput";
import Accordion from "../../components/accordion/Accordion";
import icon from "./../../assets/images/filtersIcon/ingredients-icon.png";
import RecipeCard from "../../components/cards/RecipeCard/RecipeCard";
import RecipeHeader from "../../components/recipes/RecipesHeader/RecipeHeader";
import RecipeDetails from "../../components/recipes/RecipeDetails/RecipeDetails";
import RecipeLiked from "../../components/recipes/RecipeLiked/RecipeLiked";
import RecipeSpecial from "../../components/recipes/RecipeSpecial/RecipeSpecial";
import s from "./Recipes.module.scss";
import ingredientsRaw from "./../../assets/ingredients/ingredients.json";

const maxCount = 10;

function LeftBar() {
  const { t } = useTranslation();
  const [ingredientName, setIngredientName] = useState("");

  const ingredients = useMemo(() => {
    if (ingredientName) {
      const ing: string[] = ingredientsRaw.filter((ingredient) =>
        ingredient.includes(ingredientName)
      );

      return ing.map((ingredient) => ({
        enabled: false,
        name: ingredient,
      }));
    }

    return take(ingredientsRaw, maxCount).map((ingredient) => ({
      enabled: false,
      name: ingredient,
    }));
  }, [ingredientName]);

  const handleIngredientChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIngredientName(e.target.value);
    },
    []
  );

  return (
    <div className={s.mainContentLeft}>
      <SearchInput onChange={handleIngredientChange} value={ingredientName} />

      <Accordion
        icon={icon}
        header={t("Your ingredients")}
        options={ingredients}
      />

      {/* <Accordion
        icon={icon}
        header={t("Your ingredients")}
        options={[
          { enabled: false, name: "Item" },
          { enabled: false, name: "Item" },
          { enabled: false, name: "Item" },
        ]}
      />

      <Accordion
        icon={icon}
        header={t("Your ingredients")}
        options={[
          { enabled: false, name: "Item" },
          { enabled: false, name: "Item" },
          { enabled: false, name: "Item" },
        ]}
      />

      <Accordion
        icon={icon}
        header={t("Your ingredients")}
        options={[
          { enabled: false, name: "Item" },
          { enabled: false, name: "Item" },
          { enabled: false, name: "Item" },
        ]}
      /> */}
    </div>
  );
}

export default function Recipes() {
  const { t } = useTranslation();

  return (
    <div>
      <RecipesHeader />

      <div className={s.wrapper}>
        <div className={s.navigation}>
          <div className={s.tabs}>
            <Tabs withEdit>
              <div title={t("Search")}>
                <section className={s.mainContent}>
                  <LeftBar />

                  <div className={s.mainContentRight}>
                    <RecipeHeader recipeName="Recipe name" />

                    <div>
                      <RecipeDetails />

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
      </div>
    </div>
  );
}

//  <div className={s.mainContentRight}>
//             <SearchInput withFilter />

//             <div className={s.recipePanels}>
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//             </div>
//           </div>
