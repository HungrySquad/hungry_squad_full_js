import { ChangeEventHandler, HTMLAttributes } from "react";

import s from "./SelectGender.module.scss";

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultValue: HTMLAttributes<HTMLFieldSetElement>["defaultValue"];
}

export default function SelectGender({ onChange, defaultValue }: IProps) {
  return (
    <div className={s.selectGender} defaultValue={defaultValue}>
      <div className={s.genderItem}>
        <label className={s.genderLabel}>
          <input
            className={s.genderInput}
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={onChange}
            defaultChecked={defaultValue === "male"}
          />
          <span>Male</span>
        </label>
      </div>
      <div className={s.genderItem}>
        <label className={s.genderLabel}>
          <input
            className={s.genderInput}
            type="radio"
            id="female"
            name="gender"
            value="female"
            defaultChecked={defaultValue === "female"}
          />
          <span>Female</span>
        </label>
      </div>
      <div className={s.genderItem}>
        <label className={s.genderLabel}>
          <input
            className={s.genderInput}
            type="radio"
            id="other"
            name="gender"
            value="other"
            defaultChecked={defaultValue === "other"}
          />
          <span>Other</span>
        </label>
      </div>
      <div className={s.genderItem}>
        <label className={s.genderLabel}>
          <input
            className={s.genderInput}
            type="radio"
            id="not-say"
            name="gender"
            value="not-say"
            defaultChecked={defaultValue === "not-say"}
          />
          <span>Rather not to say</span>
        </label>
      </div>
    </div>
  );
}
