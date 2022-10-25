import { IIngredientOption } from "../../interfaces/ingredients";
import s from "./Accordion.module.scss";
import AccordionItem from "./AccordionItem";

interface IProps {
  icon: string;
  header: string;
  options: IIngredientOption[];
}

export default function Accordion({ icon, header, options }: IProps) {
  return (
    <div className={s.ingredientCard}>
      <div>
        <div className={s.ingredientCardHeaderContent}>
          <div className={s.ingredientCardType}>
            <img src={icon} alt="ingredients-icon" />
            <h3>{header}</h3>
          </div>
          <button className={s.ingredientCardButton} data-state="open">
            <span>
              <i className="fa-solid fa-angle-up" />
            </span>
          </button>
        </div>
      </div>
      {options.map((option) => (
        <AccordionItem key={option.name} option={option} />
      ))}
    </div>
  );
}
