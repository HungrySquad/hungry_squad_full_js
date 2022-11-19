import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ROUTES from "../../../constants/routes";
import { RootState } from "../../../store";
import Dropdown from "../../dropdown/Dropdown";
import logo from "./../../../assets/images/header/Logo.png";
import s from "./MainHeader.module.scss";

export default function MainHeader() {
  const isLogged = useSelector<RootState>((state) => state.authSlice.isLogged);
  const { t } = useTranslation();

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <div className={s.headerLogo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav>
          {!isLogged ? (
            <ul className={s.headerLinks}>
              <li>
                <Link to={ROUTES.main}>{t("About")}</Link>
              </li>
              <li>
                <Link to={ROUTES.signup}>{t("SIGN UP")}</Link>
              </li>
              <li>
                <Link to={ROUTES.login}>{t("LOG IN")}</Link>
              </li>
            </ul>
          ) : (
            <ul className={s.headerLinks}>
              <li>
                <Link to={ROUTES.recipes}>{t("MY RECIPES")}</Link>
              </li>
              <li>
                <Dropdown
                  options={[
                    { name: t("Settings") },
                    { name: t("View History") },
                  ]}
                ></Dropdown>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
