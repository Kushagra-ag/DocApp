import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllDoctors from './allDoctors.js';
import Doctor from './doctorProfile.js';

export default function Admin() {

    return (
        <Switch>
            <Route path="/admin/doctor/all" component={AllDoctors} />
            <Route path="/admin/doctor/:id" component={Doctor} />
            <Route path="/admin/doctor" component={Doctor} />
        </Switch>
    );
}
