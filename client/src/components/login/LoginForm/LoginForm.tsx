import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import CommonInput from "../../fields/CommonInput/CommonInput";
import AuthForm from "../../forms/AuthForm/AuthForm";
import HeadlineSmall from "../../texts/HeadlineSmall/HeadlineSmall";
import HeadlineLarge from "../../texts/HeadlineLarge/HeadlineLarge";
import CommonButton from "../../buttons/CommonButton";
import ROUTES from "../../../constants/routes";
import { loginUser } from "../../../store/actions/auth";
import { AppDispatch } from "../../../store";
import { ILogin } from "../../../service/auth";
import s from "./LoginForm.module.scss";

export default function LoginForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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

  const onLoginIn = useCallback(async () => {
    if (email && password) {
      const result = await dispatch(
        loginUser({
          email,
          password,
        })
      );

      if ((result.payload as ILogin).jwt_token) {
        localStorage.setItem("token", (result.payload as ILogin).jwt_token);
        navigate(ROUTES.main);
      }
    }
  }, [dispatch, email, navigate, password]);

  return (
    <AuthForm>
      <>
        <div className={s.texts}>
          <HeadlineLarge text={t("Welcome back!")} />
          <HeadlineSmall text={t("Don’t have an account? Sign up")} />
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

        <div className={s.login}>
          <CommonButton onClick={onLoginIn} text={t("Log in")}></CommonButton>
        </div>
      </>
    </AuthForm>
  );
}
