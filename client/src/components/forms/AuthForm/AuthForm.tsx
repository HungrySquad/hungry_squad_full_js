import s from "./AuthForm.module.scss";

interface IProps {
  children: JSX.Element;
}

export default function AuthForm({ children }: IProps) {
  return <div className={s.wrapper}>{children}</div>;
}
