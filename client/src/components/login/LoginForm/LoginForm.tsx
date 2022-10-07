import noop from "lodash/noop";
import { useTranslation } from "react-i18next";

import CommonInput from "../../fields/CommonInput/CommonInput";
import AuthForm from "../../forms/AuthForm/AuthForm";
import HeadlineSmall from "../../texts/HeadlineSmall/HeadlineSmall";
import HeadlineLarge from "../../texts/HeadlineLarge/HeadlineLarge";
import CommonButton from "../../buttons/CommonButton";
import s from "./LoginForm.module.scss";

export default function LoginForm() {
  const { t } = useTranslation();

  return (
    <AuthForm>
      <>
        <div className={s.texts}>
          <HeadlineLarge text={t("Welcome back!")} />
          <HeadlineSmall text={t("Don’t have an account? Sign up")} />
        </div>
        <CommonInput text={t("Email")} />
        <CommonInput text={t("Password")} />

        <div className={s.login}>
          <CommonButton onClick={noop} text={t("Log in")}></CommonButton>
        </div>
      </>
    </AuthForm>
  );
}
