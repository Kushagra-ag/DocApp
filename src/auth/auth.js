import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signup from './signup.js';
import Login from './login.js';

export default function App() {
  return (
    <Switch>
        <Route  path="/auth/login" component={Login} />
        <Route  path="/auth/signup" component={signup} />
    </Switch>
    
  );
}