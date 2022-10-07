import s from "./CommonButton.module.scss";

interface IProps {
  text: string;
  onClick: () => void;
}

export default function CommonButton({ text, onClick }: IProps): JSX.Element {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      {text}
    </button>
  );
}
