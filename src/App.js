import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@mui/styles';

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "mar",
});

export default ({ routePrefix = "" }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter basename={routePrefix}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
