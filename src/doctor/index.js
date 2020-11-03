import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './profile.js';
import Places from './places.js';
import Reviews from './reviews.js';
import TopBar from '../components/TopBar.js';
import BottomNav from '../components/BottomNav.js';
import { isAuthenticated } from '../core/helperMethods.js';

export default function Doctor() {

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
                    <Route path="/doctor/profile/:doctorId" render={props => (<Profile {...props} profile={user} />)} />
                    <Route path="/doctor/places" render={props => (<Places {...props} profile={user} />)} />
                    <Route path="/doctor/reviews" render={props => (<Reviews {...props} profile={user} />)} />
                </Switch>
            </div>
            <BottomNav />
        </>
    ) : null
}
