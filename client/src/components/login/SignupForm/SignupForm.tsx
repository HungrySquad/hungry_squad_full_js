import noop from "lodash/noop";
import { useTranslation } from "react-i18next";

import CommonButton from "../../buttons/CommonButton";
import CommonInput from "../../fields/CommonInput/CommonInput";
import AuthForm from "../../forms/AuthForm/AuthForm";
import SelectGender from "../../selectGender/SelectGender";
import HeadlineLarge from "../../texts/HeadlineLarge/HeadlineLarge";
import HeadlineSmall from "../../texts/HeadlineSmall/HeadlineSmall";
import s from "./SignupForm.module.scss";

export default function SignupForm() {
  const { t } = useTranslation();
  return (
    <AuthForm>
      <>
        <div className={s.texts}>
          <HeadlineLarge text={t("Let’s cook something!")} />
          <HeadlineSmall text={t("Have an account? Log in")} />
        </div>
        <CommonInput text={t("Email")} />
        <CommonInput text={t("Password")} />
        <SelectGender />

        <div className={s.signup}>
          <CommonButton onClick={noop} text={t("Sign up")}></CommonButton>
        </div>
      </>
    </AuthForm>
  );
}
