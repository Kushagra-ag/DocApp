import React from 'react';
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

export default function App() {
    return (
        <>
            <TopBar />
            <div className="row">
                <Switch>
                    <Route path="/user/dashboard" component={Dashboard} />
                    <Route path="/user/settings" component={Settings} />
                    <Route path="/user/refer" component={Refer} />
                    <Route path="/user/profile" component={Profile} />
                    <Route path="/user/review" component={Review} />
                    <Route path="/user/faq" component={Faq} />
                    <Route path="/user/search" component={Search} />
                </Switch>
            </div>
            <BottomNav />
        </>
    );
}
