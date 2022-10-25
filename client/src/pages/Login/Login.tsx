import Footer from "../../components/footer/Footer";
import MainHeader from "../../components/headers/MainHeader/MainHeader";
import LoginForm from "../../components/login/LoginForm/LoginForm";
import s from "./Login.module.scss";

export default function Login() {
  return (
    <div className={s.login}>
      <MainHeader />

      <div className={s.loginForm}>
        <LoginForm />
      </div>

      <Footer />
    </div>
  );
}
