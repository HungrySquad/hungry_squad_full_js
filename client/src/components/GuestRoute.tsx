import { ComponentType } from "react";

interface IProps {
  component: ComponentType<any>;
  path: string;
}

const GuestRoute = (props: IProps): JSX.Element => {
  const { component: Component } = props;

  return <Component />;
};

export default GuestRoute;
