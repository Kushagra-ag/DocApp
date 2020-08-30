import React, { useLayoutEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Dashboard from './dashboard.js';
import AllDoctors from './doctors/allDoctors.js';
import Doctor from './doctors/doctorProfile.js';
import { isAuthenticatedAdmin } from '../core/helperMethods.js';

export default function Admin() {
    const history = useHistory();

    useLayoutEffect(() => {
        if (!isAuthenticatedAdmin()) {
            history.push('/');
        }
    });

    return (
        <Switch>
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/doctors" component={AllDoctors} />
            <Route path="/admin/doctor/:id" component={Doctor} />
        </Switch>
    );
}
