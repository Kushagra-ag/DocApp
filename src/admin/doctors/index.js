import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllDoctors from './allDoctors.js';
import Doctor from './doctorProfile.js';

export default function Admin({ profile }) {

    return profile ? (
        <Switch>
            <Route path="/admin/doctor/all" component={AllDoctors} />
            <Route path="/admin/doctor/:id" render={props => (<Doctor {...props} profile={profile} />)} />
            <Route path="/admin/doctor" component={Doctor} />
        </Switch>
    ) : null
}
