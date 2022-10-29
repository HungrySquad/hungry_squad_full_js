import noop from "lodash/noop";
import ShowMore from "../../buttons/ShowMore/ShowMore";
import RecipeCard from "../../cards/RecipeCard/RecipeCard";
import s from "./RecipeLiked.module.scss";

export default function RecipeLiked() {
  return (
    <div className={s.recipePanels}>
      <div className={s.recipes}>
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
        <RecipeCard />
        <ShowMore onClick={noop} />
      </div>
    </div>
  );
}
