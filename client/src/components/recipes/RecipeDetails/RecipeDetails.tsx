import Tabs from "../../tabs/Tabs";
import recipeImage from "./../../../assets/images/recipeImages/selected-recipe-img.png";
import s from "./RecipeDetails.module.scss";
import classNames from "classnames";

interface IRecipeDetailsProps {}

export default function RecipeDetails() {
  return (
    <div className={s.recipeDetails}>
      <div className={s.recipeDetailsImage}>
        <img src={recipeImage} alt="selected-recipe" />
      </div>
      <div className={s.recipeDetailsCookingTimeWrapper}>
        <div className="time-and-amount__column d-flex flex-column">
          <div className={s.recipeDetailsCookingTime}>
            <h6>Prep time</h6>
            <span>N mins</span>
          </div>
          <div className={s.recipeDetailsCookingTime}>
            <h6>Cook time</h6>
            <span>N mins</span>
          </div>
        </div>
        <div className="time-and-amount__column d-flex flex-column">
          <div className={s.recipeDetailsCookingTime}>
            <h6>Total time</h6>
            <span>N mins</span>
          </div>
          <div className={s.recipeDetailsCookingTime}>
            <h6>Additional time</h6>
            <span>N mins</span>
          </div>
        </div>
        <div className="time-and-amount__column d-flex flex-column">
          <div className={s.recipeDetailsCookingTime}>
            <h6>Serving</h6>
            <span>N</span>
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
                <p className="nutritions-full__title">Nutrient</p>
                <p className="nutritions-full__title">Mass, Daily Value % *</p>
              </div>
              <div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Total Fat</span>
                  <div />
                  <span>Ng, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Saturated Fat</span>
                  <div />
                  <span>Ng, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Cholesterol</span>
                  <div />
                  <span>Nmg, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Sodium</span>
                  <div />
                  <span>Nmg, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Total Carbohydrate</span>
                  <div />
                  <span>Ng, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Total Sugars</span>
                  <div />
                  <span>Ng, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Protein</span>
                  <div />
                  <span>Ng, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Vitamin C</span>
                  <div />
                  <span>Nmg, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Calcium</span>
                  <div />
                  <span>Nmg, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Iron</span>
                  <div />
                  <span>Nmg, N%</span>
                </div>
                <div className={s.recipeDetailsNutritionsInformationRow}>
                  <span>Potassium</span>
                  <div />
                  <span>Nmg, N%</span>
                </div>
              </div>
            </div>
          </div>
          <div title="Directions">
            <p className={s.recipeDetailsDirections}>
              Cheese lorem ipsum monterey jack roquefort cheese strings.
              Halloumi taleggio who moved my cheese melted cheese gouda hard
              cheese ricotta melted cheese. Paneer port-salut stinking bishop
              brie cheese on toast lancashire hard cheese fromage. Taleggio
              fromage frais jarlsberg cut the cheese who moved my cheese. Swiss
              edam smelly cheese. Paneer smelly cheese cream cheese jarlsberg
              ricotta cheese slices st. agur blue cheese croque monsieur.
              Bavarian bergkase caerphilly everyone loves pepper jack fromage
              frais cheesecake everyone loves when the cheese comes out
              everybody's happy. Cottage cheese who moved my cheese taleggio.
              Bavarian bergkase danish fontina manchego squirty cheese smelly
              cheese cream cheese halloumi cow. Cauliflower cheese brie edam
              cheese strings brie queso red leicester goat. Mozzarella emmental
              cream cheese. Cheese and biscuits fondue dolcelatte roquefort
              parmesan melted cheese mascarpone cheesecake. Pepper jack macaroni
              cheese pepper jack queso stinking bishop red leicester mozzarella
              ricotta. Fromage frais pepper jack bishop.
            </p>
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
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Total Fat</span>
                    <div />
                    <span>Ng, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Saturated Fat</span>
                    <div />
                    <span>Ng, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Cholesterol</span>
                    <div />
                    <span>Nmg, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Sodium</span>
                    <div />
                    <span>Nmg, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Total Carbohydrate</span>
                    <div />
                    <span>Ng, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Total Sugars</span>
                    <div />
                    <span>Ng, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Protein</span>
                    <div />
                    <span>Ng, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Vitamin C</span>
                    <div />
                    <span>Nmg, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Calcium</span>
                    <div />
                    <span>Nmg, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Iron</span>
                    <div />
                    <span>Nmg, N%</span>
                  </div>
                  <div className={s.recipeDetailsNutritionsInformationRow}>
                    <span>Potassium</span>
                    <div />
                    <span>Nmg, N%</span>
                  </div>
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
