import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './profile.js';
import Places from './places.js';

export default function Doctor() {
  return (
      <Switch>
        <Route path="/doctor/profile" component={Profile} />
        <Route  path="/doctor/places" component={Places} />
      </Switch>
  );
}