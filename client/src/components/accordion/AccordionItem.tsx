import { IIngredientOption } from "../../interfaces/ingredients";
import s from "./Accordion.module.scss";

interface IProps {
  option: IIngredientOption;
  onChange?: (optionName: string, enabled: boolean) => void;
}

export default function AccordionItem({ option, onChange }: IProps) {
  const handleEnableOption = () => {
    onChange?.(option.name, !option.enabled);
  };

  return (
    <div className={s.ingredientCardContent}>
      <div className={s.ingredientCardIngredient}>
        <span>{option.name}</span>
        <span className={s.ingredientCardDots} />
        <div className="ingredient-info d-flex justify-content-between">
          <span className={s.ingredientAmount} role="textbox">
            any amount
          </span>
          <input
            className={s.ingredientSelection}
            type="checkbox"
            name="your-ingredients"
            disabled={option.enabled}
            onChange={handleEnableOption}
          />
        </div>
      </div>
    </div>
  );
}
