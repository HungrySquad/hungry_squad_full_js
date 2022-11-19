import s from "./RecipeCard.module.scss";
import recipeImage from "./../../../assets/images/recipeImages/recipe-img.png";
import { IRecipe } from "../../../interfaces/ingredients";
import { useEffect, useState } from "react";
import noImage from "./../../../assets/images/recipeImages/no-image.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

interface IRecipeCardProps {
  recipe?: IRecipe;
}

export default function RecipeCard({ recipe }: IRecipeCardProps) {
  const [imgSrc, setImgSrc] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (recipe?.img_url) {
      const img = new Image();
      img.src = recipe?.img_url;
      img.onload = () => {
        setImgSrc(recipe?.img_url);
      };
    }
  }, [recipe?.img_url]);

  const handleNavigate = () => {
    if (!recipe?.id) return;
    navigate(ROUTES.recipesDetails.replace(":id", recipe?.id.toString()));
  };

  if (recipe) {
    return (
      <div className={s.recipeCard} onClick={handleNavigate}>
        <div className={s.recipeCardWrapper}>
          <div className={s.recipeCardImage}>
            {imgSrc ? (
              <img src={imgSrc} alt="recipe" />
            ) : (
              <div className={s.recipeNoImage}>
                <img src={noImage} alt="" />
                <p>No image</p>
              </div>
            )}
          </div>
          <div className={s.recipeCardDescription}>
            <div className={s.recipeCardTop}>
              <h3 className={s.recipeCardTitle}>{recipe.name}</h3>
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
      </div>
    );
  }

  return (
    <div className={s.recipeCard}>
      <div className={s.recipeCardWrapper}>
        <div className={s.recipeCardImage}>
          <img src={recipeImage} alt="" />
        </div>
        <div className={s.recipeCardDescription}>
          <div className={s.recipeCardTop}>
            <h3 className={s.recipeCardTitle}>Test</h3>
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
    </div>
  );
}
