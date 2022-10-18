import s from "./CommonButton.module.scss";
import classNames from "classnames";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  withBorder?: boolean;
}

// TODO: add ripple
export default function CommonButton({
  text,
  onClick,
  withBorder = false,
  ...props
}: IProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(s.button, {
        [s.border]: withBorder,
      })}
      {...props}
    >
      {text}
    </button>
  );
}
