import RecipeCard from "../../cards/RecipeCard/RecipeCard";
import s from "./RecipeSpecial.module.scss";

export default function RecipeSpecial() {
  return (
    <div className={s.recipePanels}>
      <div className={s.recipes}>
        <div className={s.wrapper}>
          <div className={s.trending}>
            <div className={s.recipeBlock}>
              <p className={s.recipeBlockTitle}>Trending</p>
            </div>

            <div className={s.trendingRecipes}>
              <RecipeCard />
              <RecipeCard />
            </div>
            <div className={s.showMore}>
              <button className={s.showMoreText}>Show more</button>
            </div>
          </div>

          <div className={s.trending}>
            <div className={s.recipeBlock}>
              <p className={s.recipeBlockTitle}>Based on what you like</p>
            </div>

            <div className={s.trendingRecipes}>
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
