import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard.js';
import Settings from './settings.js';
import Refer from '../components/user/settings/refer/';
import Profile from './profile/profile.js';
import Review from './review.js';
import Search from './search.js';
import Faq from '../components/user/settings/faq/components/';
import TopBar from '../components/TopBar.js';
import BottomNav from '../components/BottomNav.js';
import { isAuthenticated } from '../core/helperMethods.js';

export default function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        isAuthenticated()
            .then(profile => {
                if (profile.data) {
                    setUser({
                        ...profile.data.user,
                        token: profile.data.token
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return user ? (
        <>
            <TopBar />
            <div className="row">
                <Switch>
                    <Route path="/user/dashboard" component={Dashboard} />
                    <Route path="/user/settings" render={props => (<Settings {...props} profile={user} />)} />
                    <Route path="/user/refer" component={Refer} />
                    <Route path="/user/profile" render={props => (<Profile {...props} profile={user} />)} />
                    <Route path="/user/review/:doctorId" component={Review} />
                    <Route path="/user/faq" component={Faq} />
                    <Route path="/user/search" component={Search} />
                </Switch>
            </div>
            <BottomNav />
        </>
    ) : null
}
