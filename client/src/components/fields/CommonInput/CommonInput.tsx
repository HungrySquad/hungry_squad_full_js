import s from "./CommonInput.module.scss";

interface IProps {
  text: string;
}

export default function CommonInput({ text }: IProps) {
  return <input className={s.input} placeholder={text} />;
}
