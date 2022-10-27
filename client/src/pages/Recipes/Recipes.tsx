import classNames from "classnames";
import { useTranslation } from "react-i18next";

import RecipesHeader from "../../components/headers/RecipesHeader/RecipesHeader";
import Tabs from "../../components/tabs/Tabs";
import SearchInput from "../../components/fields/SearchInput/SearchInput";
import Accordion from "../../components/accordion/Accordion";
import icon from "./../../assets/images/filtersIcon/ingredients-icon.png";
import RecipeCard from "../../components/cards/RecipeCard/RecipeCard";
import s from "./Recipes.module.scss";
import RecipeHeader from "../../components/recipes/RecipesHeader/RecipeHeader";
import RecipeDetails from "../../components/recipes/RecipeDetails/RecipeDetails";

export default function Recipes() {
  const { t } = useTranslation();

  return (
    <div>
      <RecipesHeader />

      <div className={s.wrapper}>
        <div className={s.navigation}>
          <div
            className={classNames(s.creditsIcon, s.creditsIconRegular)}
            data-state="close"
          >
            <i className="fa-solid fa-pencil" />
          </div>

          <div className={s.tabs}>
            <Tabs>
              <div title="Search"></div>
              <div title="Liked"></div>
              <div title="For you"></div>
            </Tabs>
          </div>
        </div>

        <section className={s.mainContent}>
          <div className={s.mainContentLeft}>
            <SearchInput />

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
            />
          </div>

          {/* <div className={s.mainContentRight}>
            <SearchInput withFilter />

            <div className={s.recipePanels}>
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          </div> */}

          <div className={s.mainContentRight}>
            {/* <SearchInput withFilter /> */}
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
    </div>
  );
}
