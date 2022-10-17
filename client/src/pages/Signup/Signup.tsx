import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SignupForm from "../../components/login/SignupForm/SignupForm";
import s from "./Signup.module.scss";

export default function Signup() {
  return (
    <div className={s.signup}>
      <Header />

      <div className={s.signupForm}>
        <SignupForm />
      </div>

      <Footer />
    </div>
  );
}
