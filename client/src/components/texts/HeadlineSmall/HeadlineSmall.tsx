import s from "./HeadlineSmall.module.scss";

interface IProps {
  text: string;
}

export default function HeadlineSmall({ text }: IProps) {
  return <p className={s.headlineSmall}>{text}</p>;
}
