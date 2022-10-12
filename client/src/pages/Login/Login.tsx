import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoginForm from "../../components/login/LoginForm/LoginForm";
import s from "./Login.module.scss";

export default function Login() {
  return (
    <div className={s.login}>
      <Header />

      <div className={s.loginForm}>
        <LoginForm />
      </div>

      <Footer />
    </div>
  );
}
