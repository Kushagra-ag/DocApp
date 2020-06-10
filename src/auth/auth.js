import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup.js';
import Login from './login.js';
import Forgot from './forgot.js';

export default function App() {
  return (
    <Switch>
        <Route  path="/auth/login" component={Login} />
        <Route  path="/auth/signup" component={Signup} />
        <Route  path="/auth/forgot" component={Forgot} />
    </Switch>
    
  );
}