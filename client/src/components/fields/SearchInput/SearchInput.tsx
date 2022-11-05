import classNames from "classnames";
import { ChangeEventHandler } from "react";
import s from "./SearchInput.module.scss";

interface IProps {
  withFilter?: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchInput({
  withFilter = false,
  value,
  onChange,
}: IProps) {
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
        value={value}
        onChange={onChange}
      />

      {withFilter && (
        <button className={s.filters}>
          <i className="fa-solid fa-sliders" />
        </button>
      )}
    </label>
  );
}
