import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ROUTES from "../../../constants/routes";
import Dropdown from "../../dropdown/Dropdown";
import logo from "./../../../assets/images/header/Logo.png";
import s from "./RecipesHeader.module.scss";

export default function RecipesHeader() {
  const { t } = useTranslation();

  return (
    <header className={s.recipesHeader}>
      <div className={s.headerLogo}>
        <Link to={ROUTES.main}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={s.headerLinks}>
          <li>
            <Link to={ROUTES.recipes}>{t("MY RECIPES")}</Link>
          </li>
          <li>
            <Dropdown
              options={[{ name: t("Settings") }, { name: t("View History") }]}
            ></Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
}
