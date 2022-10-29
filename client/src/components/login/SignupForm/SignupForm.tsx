import { ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../constants/routes";
import { IUser } from "../../../interfaces/user";
import { AppDispatch } from "../../../store";
import { registerUser } from "../../../store/actions/auth";

import CommonButton from "../../buttons/CommonButton/CommonButton";
import CommonInput from "../../fields/CommonInput/CommonInput";
import AuthForm from "../../forms/AuthForm/AuthForm";
import SelectGender from "../../selectGender/SelectGender";
import HeadlineLarge from "../../texts/HeadlineLarge/HeadlineLarge";
import HeadlineSmall from "../../texts/HeadlineSmall/HeadlineSmall";
import s from "./SignupForm.module.scss";

export default function SignupForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<IUser["gender"]>("male");

  const onSignUp = useCallback(async () => {
    if (email && password && gender) {
      const result = await dispatch(
        registerUser({
          email,
          password,
          gender,
        })
      );

      if (result.payload) {
        navigate(ROUTES.login);
      }
    }
  }, [dispatch, email, gender, navigate, password]);

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const onGenderChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value as IUser["gender"]);
  }, []);

  return (
    <AuthForm>
      <>
        <div className={s.texts}>
          <HeadlineLarge text={t("Let's cook something!")} />
          <HeadlineSmall text={t("Have an account? Log in")} />
        </div>
        <CommonInput
          placeholder={t("Email")}
          value={email}
          onChange={onEmailChange}
        />
        <CommonInput
          placeholder={t("Password")}
          value={password}
          onChange={onPasswordChange}
        />
        <SelectGender defaultValue={gender} onChange={onGenderChange} />

        <div className={s.signup}>
          <CommonButton onClick={onSignUp} text={t("Sign up")}></CommonButton>
        </div>
      </>
    </AuthForm>
  );
}
