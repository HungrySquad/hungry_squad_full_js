import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./globalStyles/App.global.scss";
import ROUTES from "./constants/routes";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";
import { AppDispatch } from "./store";
import "./i18n/index";
import { checkAuth } from "./store/slices/auth";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<PrivateRoute component={Main} />} />

        <Route
          path={ROUTES.login}
          element={<GuestRoute component={Login} path={ROUTES.login} />}
        />

        <Route
          path={ROUTES.signup}
          element={<GuestRoute component={Signup} path={ROUTES.signup} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
