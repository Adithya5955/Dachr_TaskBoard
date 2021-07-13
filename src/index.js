
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppProvider from "./components/AppProvider/AppProvider";
import Dashboard from "./containers/Dashboard";
// import test from "./test";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";

render(
  <AppProvider>
    <BrowserRouter >  
      <Switch>
        
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);

registerServiceWorker();
