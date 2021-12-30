import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import * as URL from "./constants/Routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={URL.ROUTES.landing_page} exact component={Container} />
        {/*Common routes*/}
        <Route path="" exact component={Container} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
