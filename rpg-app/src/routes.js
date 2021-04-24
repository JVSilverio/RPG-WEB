import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/index";
import Summary from "./pages/summary/index";

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Redirect from="/" to="/login" exact />
          <Route path="/login" component={Login} exact />
          <Route
            path="/summary"
            component={() => <Summary authorized={true} />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default Routes;
