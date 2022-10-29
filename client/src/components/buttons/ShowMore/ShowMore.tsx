import { useTranslation } from "react-i18next";
import s from "./ShowMore.module.scss";

interface IProps {
  onClick: () => void;
}

export default function ShowMore({ onClick }: IProps) {
  const { t } = useTranslation();

  return (
    <button className={s.showMore} onClick={onClick}>
      {t("Show more")}
    </button>
  );
}
