import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./pages/login/index"));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default Routes;
