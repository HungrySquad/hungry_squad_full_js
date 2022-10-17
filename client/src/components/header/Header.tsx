import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/header/Logo.png";
import s from "./Header.module.scss";

export default function Header() {
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
          <ul className={s.headerLinks}>
            <li>
              <Link to="/">{t("About")}</Link>
            </li>
            <li>
              <Link to="/">{t("SIGN UP")}</Link>
            </li>
            <li>
              <Link to="/">{t("LOG IN")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
