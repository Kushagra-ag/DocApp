import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllUsers from './allUsers.js';
// import User from './userProfile.js';

export default function Admin() {

    return (
        <Switch>
            <Route path="/admin/user/all" component={AllUsers} />
            {
            	// <Route path="/admin/user/:id" component={User} />
            	// <Route path="/admin/user" component={User} />
                    }
        </Switch>
    );
}