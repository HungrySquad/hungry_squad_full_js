import { useEffect, useState } from "react";
import classNames from "classnames";
import Tabs from "../../tabs/Tabs";
import { IRecipe } from "../../../interfaces/ingredients";
import noImage from "./../../../assets/images/recipeImages/no-image.png";
import s from "./RecipeDetails.module.scss";
import { getTimeFromRecipeTimeValues } from "../../../utils/getTimeFromRecipeTimeValues";

interface IRecipeDetailsProps {
  recipe: IRecipe;
}

export default function RecipeDetails({ recipe }: IRecipeDetailsProps) {
  const [imgSrc, setImgSrc] = useState<string>();

  useEffect(() => {
    if (recipe?.img_url) {
      const img = new Image();
      img.src = recipe?.img_url;
      img.onload = () => {
        setImgSrc(recipe?.img_url);
      };
    }
  }, [recipe?.img_url]);

  return (
    <div className={s.recipeDetails}>
      <div className={s.recipeDetailsImage}>
        {imgSrc ? (
          <img src={imgSrc} alt="recipe" />
        ) : (
          <div className={s.recipeNoImage}>
            <img src={noImage} alt="" />
            <p>No image</p>
          </div>
        )}
      </div>
      <div className={s.recipeDetailsCookingTimeWrapper}>
        <div className="time-and-amount__column d-flex flex-column">
          <div className={s.recipeDetailsCookingTime}>
            <h6>Prep time</h6>
            <span>{getTimeFromRecipeTimeValues(recipe.time_values[0])}</span>
          </div>
          <div className={s.recipeDetailsCookingTime}>
            <h6>Cook time</h6>
            <span>{getTimeFromRecipeTimeValues(recipe.time_values[1])}</span>
          </div>
        </div>
        <div className="time-and-amount__column d-flex flex-column">
          <div className={s.recipeDetailsCookingTime}>
            <h6>Total time</h6>
            <span>{getTimeFromRecipeTimeValues(recipe.time_values[2])}</span>
          </div>
          <div className={s.recipeDetailsCookingTime}>
            <h6>Additional time</h6>
            <span>N mins</span>
          </div>
        </div>
        <div className="time-and-amount__column d-flex flex-column">
          <div className={s.recipeDetailsCookingTime}>
            <h6>Serving</h6>
            <span>{recipe.servings}</span>
          </div>
          <div className={s.recipeDetailsCookingTime}>
            <h6>Yield</h6>
            <span>N</span>
          </div>
        </div>
      </div>

      <div className={s.recipeDetailsInformation}>
        <Tabs>
          <div title="Ingredients">
            <div className={s.recipeDetailsNutritionsInformations}>
              <div className={s.recipeDetailsNutritionsInformationsHeader}>
                {/* <p className="nutritions-full__title">Nutrient</p>
                <p className="nutritions-full__title">Mass, Daily Value % *</p> */}
              </div>
              <div>
                {recipe.ingredients.map((ingredient) => (
                  <div
                    className={s.recipeDetailsNutritionsInformationRow}
                    key={ingredient}
                  >
                    <span>{ingredient}</span>
                    <div />
                  </div>
                ))}
                {/* <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Total Fat</span>
                  <div />
                  <span>Ng, N%</span>
                </div> */}
              </div>
            </div>
          </div>
          <div title="Directions">
            <p className={s.recipeDetailsDirections}>{recipe.instructions}</p>
          </div>
          <div title="Nutritions">
            <div className={s.recipeDetailsNutritions}>
              <h5 className={s.recipeDetailsNutritionsName}>
                Summary of nutritions in 1 serving
              </h5>
              <div className={s.recipeDetailsNutritionsSummary}>
                <div className={s.recipeDetailsNutritionsDetailsRow}>
                  <h6>Calories</h6>
                  <span>N</span>
                </div>
                <div className={s.recipeDetailsNutritionsDetailsRow}>
                  <h6>Fat</h6>
                  <span>N g</span>
                </div>
                <div className={s.recipeDetailsNutritionsDetailsRow}>
                  <h6>Carbs</h6>
                  <span>N g</span>
                </div>
                <div className={s.recipeDetailsNutritionsDetailsRow}>
                  <h6>Protein</h6>
                  <span>N g</span>
                </div>
              </div>
              <h5 className={s.recipeDetailsNutritionsTitle}>
                Full nutrition information
              </h5>
              <div
                className={classNames(
                  s.recipeDetailsNutritionsInformations,
                  s.recipeDetailsNutritionsInformationsBg
                )}
              >
                <div className={s.recipeDetailsNutritionsInformationsHeader}>
                  <p className="nutritions-full__title">Nutrient</p>
                  <p className="nutritions-full__title">
                    Mass, Daily Value % *
                  </p>
                </div>
                <div>
                  {recipe.nutritions.map((nutrition) => {
                    return nutrition ? (
                      <div
                        className={s.recipeDetailsNutritionsInformationRow}
                        key={nutrition}
                      >
                        <span>{nutrition}</span>
                        <div />
                      </div>
                    ) : (
                      <></>
                    );
                  })}
                  {/* <div className={s.recipeDetailsNutritionsInformationRow}>
                          <span>Total Fat</span>
                          <div />
                          <span>Ng, N%</span>
                      </div> */}
                </div>
              </div>
              <h5 className={s.recipeDetailsNutritionsInfo}>
                * Daily Value is based on a 2000 calorie diet.
              </h5>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
