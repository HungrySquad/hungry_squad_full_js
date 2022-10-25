import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import s from "./Dropdown.module.scss";

interface IProps {
  options: { name: string }[];
}

export default function Dropdown({ options }: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={s.dropdown}>
      <button
        className={s.profileBtn}
        data-ripple-color="btn-ripple-text"
        data-state="close"
        onClick={toggle}
      >
        <span>{t("MY PROFILE")}</span>
        <span className={s.profileArrow}>
          <i className="fa-solid fa-angle-down" />
        </span>
      </button>
      {isOpen && (
        <div className={s.dropdownOptions}>
          {options.map((option) => (
            <Link
              className={s.dropdownChildItem}
              to={ROUTES.main}
              key={option.name}
            >
              {option.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
