import s from "./RecipeCard.module.scss";
import recipeImage from "./../../../assets/images/recipeImages/recipe-img.png";

export default function RecipeCard() {
  return (
    <div className={s.recipeCard}>
      <div className={s.recipeCardImage}>
        <img src={recipeImage} alt="recipe" />
      </div>
      <div className={s.recipeCardDescription}>
        <div className={s.recipeCardTop}>
          <h3 className={s.recipeCardTitle}>Grandma's Bread</h3>
          <button className={s.recipeCardNoLike}>
            <i className="fa-regular fa-heart text-center" />
          </button>
        </div>
        <div className={s.recipeCardIngredientsMinutes}>
          <p>
            <span>0/0</span> ingredients
          </p>
          <p>
            <span>00</span> minutes
          </p>
        </div>
      </div>
    </div>
  );
}
