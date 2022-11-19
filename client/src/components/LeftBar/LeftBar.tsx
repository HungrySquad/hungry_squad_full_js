import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { noop, take } from "lodash";
import { useTranslation } from "react-i18next";

import Accordion from "../../components/accordion/Accordion";
import SearchInput from "../fields/SearchInput/SearchInput";
import icon from "./../../assets/images/filtersIcon/ingredients-icon.png";
import ingredientsRaw from "./../../assets/ingredients/ingredients.json";
import s from "./LeftBar.module.scss";

const MAX_COUNT = 10;

interface ILeftBarProps {}

export default function LeftBar({}: ILeftBarProps) {
  const { t } = useTranslation();
  const [ingredientName, setIngredientName] = useState("");

  const ingredients = useMemo(() => {
    if (ingredientName) {
      const ing: string[] = ingredientsRaw.filter((ingredient) =>
        ingredient.includes(ingredientName)
      );

      return ing.map((ingredient) => ({
        enabled: false,
        name: ingredient,
      }));
    }

    return take(ingredientsRaw, MAX_COUNT).map((ingredient) => ({
      enabled: false,
      name: ingredient,
    }));
  }, [ingredientName]);

  const handleIngredientChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIngredientName(e.target.value);
    },
    []
  );

  return (
    <div className={s.mainContentLeft}>
      <SearchInput
        onChange={handleIngredientChange}
        value={ingredientName}
        placeholder={"Search ingredients..."}
      />

      <Accordion
        icon={icon}
        header={t("Your ingredients")}
        options={ingredients}
        onChange={noop}
      />
    </div>
  );
}
