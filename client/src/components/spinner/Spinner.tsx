import s from "./Spinner.module.scss";

export default function Spinner() {
  return (
    <div className={s.spinnerContainer}>
      <div className={s.loadingSpinner}></div>
    </div>
  );
}
