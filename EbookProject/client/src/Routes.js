import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Home from "./core/Home";
import Dashboard from "./user/UserDashboard";
import Forgot from './user/Forgot';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/SignIn" exact component={SignIn} />
                <Route path="/externalRequest" exact component={Forgot} />
                <Route path="/SignUp" exact component={SignUp} />


            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
