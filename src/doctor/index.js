import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './profile.js';
import Places from './places.js';
import Reviews from './reviews.js';
import TopBar from '../components/TopBar.js';
import BottomNav from '../components/BottomNav.js';

export default function Doctor() {
    return (
        <>
            <TopBar />
            <div className="row">
                <Switch>
                    <Route path="/doctor/profile" component={Profile} />
                    <Route path="/doctor/places" component={Places} />
                    <Route path="/doctor/reviews" component={Reviews} />
                </Switch>
            </div>
            <BottomNav />
        </>
    );
}
