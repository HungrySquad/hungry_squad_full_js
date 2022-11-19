import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { AppDispatch } from "../../store";
import { logOut } from "../../store/slices/auth";
import s from "./Dropdown.module.scss";

interface IProps {
  options: { name: string }[];
}

export default function Dropdown({ options }: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const logout = () => {
    dispatch(logOut());
    navigate(ROUTES.login);
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
          <span className={s.dropdownChildItem} onClick={logout}>
            Logout
          </span>
        </div>
      )}
    </div>
  );
}
