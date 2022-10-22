import { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ROUTES from "../constants/routes";
import { RootState } from "../store";

interface IProps {
  component: ComponentType<any>;
}

const PrivateRoute = (props: IProps): JSX.Element => {
  const isLogged = useSelector<RootState>((state) => state.authSlice.isLogged);

  if (isLogged != null && !isLogged) {
    return <Navigate to={ROUTES.login} replace />;
  }

  const { component: Component } = props;

  return <Component />;
};

export default PrivateRoute;
