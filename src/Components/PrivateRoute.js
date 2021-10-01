import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => {
        return currentUser ? <Component /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
