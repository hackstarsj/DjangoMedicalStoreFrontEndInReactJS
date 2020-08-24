import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainComponent from "./components/MainComponent";
import { PrivateRoute } from "./utils/PrivateRoute";
import HomeComponent from "./pages/HomeComponent";
import CompanyComponent from "./pages/CompanyComponent";
import { PrivateRouteNew } from "./utils/PrivateRouteNew";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <PrivateRouteNew
        exact
        path="/home"
        activepage="0"
        page={<HomeComponent />}
      ></PrivateRouteNew>
      <PrivateRouteNew
        exact
        path="/company"
        activepage="1"
        page={<CompanyComponent />}
      ></PrivateRouteNew>
    </Switch>
  </Router>,
  document.getElementById("root")
);
