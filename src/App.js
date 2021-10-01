import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import PrivateHome from "./Pages/PrivateHome/PrivateHome";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact="/loggedHome" component={PrivateHome} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
