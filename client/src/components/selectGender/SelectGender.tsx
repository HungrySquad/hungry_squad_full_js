import s from "./SelectGender.module.scss";

export default function SelectGender() {
  return (
    <fieldset className={s.selectGender}>
      <div className={s.genderItem}>
        <label className={s.genderLabel}>
          <input
            className={s.genderInput}
            type="radio"
            id="male"
            name="gender"
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
          />
          <span>Rather not to say</span>
        </label>
      </div>
    </fieldset>
  );
}
