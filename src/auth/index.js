import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup.js';
import Login from './login.js';
import Forgot from './forgot.js';
import Reset from './reset.js';

export default function Auth() {
    return (
        <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={Signup} />
            <Route path="/auth/forgot" component={Forgot} />
            <Route path="/auth/reset" component={Reset} />
        </Switch>
    );
}
