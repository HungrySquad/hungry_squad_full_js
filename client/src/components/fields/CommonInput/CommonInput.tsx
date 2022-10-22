import React from "react";
import s from "./CommonInput.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function CommonInput({
  placeholder,
  onChange,
  ...rest
}: IProps) {
  return (
    <input
      className={s.input}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
}
