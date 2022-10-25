import classNames from "classnames";
import s from "./SearchInput.module.scss";

interface IProps {
  withFilter?: boolean;
}

export default function SearchInput({ withFilter = false }: IProps) {
  return (
    <label className={s.ingredientsInput} htmlFor="ingredients-input">
      <i
        className={classNames(
          "fa-solid",
          "fa-magnifying-glass",
          s.inputIconLabel
        )}
      />
      <input
        type="text"
        name="ingredients-input"
        id="ingredients-input"
        className={s.inputIconText}
        placeholder="Search ingredients..."
      />

      {withFilter && (
        <button className={s.filters}>
          <i className="fa-solid fa-sliders" />
        </button>
      )}
    </label>
  );
}
