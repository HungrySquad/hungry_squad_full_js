import React from "react";
import classNames from "classnames";
import s from "./EditIcon.module.scss";

export default function EditIcon() {
  return (
    <div
      className={classNames(s.creditsIcon, s.creditsIconRegular)}
      data-state="close"
    >
      <i className="fa-solid fa-pencil" />
    </div>
  );
}
