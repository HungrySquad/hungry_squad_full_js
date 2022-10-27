import { useState } from "react";
import { IIngredientOption } from "../../interfaces/ingredients";
import s from "./Accordion.module.scss";
import classNames from "classnames";
import AccordionItem from "./AccordionItem";

interface IProps {
  icon: string;
  header: string;
  options: IIngredientOption[];
}

export default function Accordion({ icon, header, options }: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={s.ingredientCard}>
      <div>
        <div className={s.ingredientCardHeaderContent}>
          <div className={s.ingredientCardType}>
            <img src={icon} alt="ingredients-icon" />
            <h3>{header}</h3>
          </div>
          <button
            className={s.ingredientCardButton}
            data-state="open"
            onClick={handleClick}
          >
            <span
              className={classNames({
                [s.rotate]: isOpen,
              })}
            >
              <i className="fa-solid fa-angle-up" />
            </span>
          </button>
        </div>
      </div>
      {isOpen &&
        options.map((option) => (
          <AccordionItem key={option.name} option={option} />
        ))}
    </div>
  );
}
