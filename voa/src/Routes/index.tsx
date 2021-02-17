import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Inicio from "../pages/Inicio";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/login" component={Login} />
    </Switch>
);

export default Routes;
