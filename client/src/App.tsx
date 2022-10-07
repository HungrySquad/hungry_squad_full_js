import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyles/App.global.scss";
import ROUTES from "./constants/routes";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import "./i18n/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: discuss routing */}
        <Route path={ROUTES.main} element={<Login />} />
        {/* <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.signup} element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
