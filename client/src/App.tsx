import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import ROUTES from "./constants/routes";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Recipes from "./pages/Recipes/Recipes";
import RecipesDetails from "./pages/RecipesDetails/RecipesDetails";
import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";
import { checkAuth } from "./store/actions/auth";
import { AppDispatch } from "./store";
import "./globalStyles/App.global.scss";
import "./i18n/index";

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

        <Route
          path={ROUTES.recipes}
          element={<PrivateRoute component={Recipes} />}
        />

        <Route
          path={ROUTES.recipesDetails}
          element={<PrivateRoute component={RecipesDetails} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
