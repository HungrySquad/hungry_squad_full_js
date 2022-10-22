import { ComponentType } from "react";
// import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../store";
// import ROUTES from "../constants/routes";

interface IProps {
  component: ComponentType<any>;
  path: string;
}

const GuestRoute = (props: IProps): JSX.Element => {
  // const isLogged = useSelector<RootState>((state) => state.authSlice.isLogged);

  const { component: Component } = props;

  // if (isLogged !== null && !isLogged) {
  //   return <Navigate to={ROUTES.login} replace />;
  // }

  return <Component />;
};

export default GuestRoute;
