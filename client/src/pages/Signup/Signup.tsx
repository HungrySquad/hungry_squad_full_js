import Footer from "../../components/footer/Footer";
import MainHeader from "../../components/headers/MainHeader/MainHeader";
import SignupForm from "../../components/login/SignupForm/SignupForm";
import s from "./Signup.module.scss";

export default function Signup() {
  return (
    <div className={s.signup}>
      <MainHeader />

      <div className={s.signupForm}>
        <SignupForm />
      </div>

      <Footer />
    </div>
  );
}
