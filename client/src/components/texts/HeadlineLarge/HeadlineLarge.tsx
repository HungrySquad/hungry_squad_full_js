import s from "./HeadlineLarge.module.scss";

interface IProps {
  text: string;
}

export default function HeadlineLarge({ text }: IProps) {
  return <p className={s.headlineLarge}>{text}</p>;
}
