import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home.js';
import Settings from './settings.js';
import Refer from './refer.js';
import Profile from './profile/profile.js';
import Review from './review.js';
import TopBar from '../components/TopBar.js';
import BottomNav from '../components/BottomNav.js';
import VerticalMenu from '../components/VerticalMenu.js';

export default function App() {
    return (
        <>
            <TopBar />
            <div className="row">
                <VerticalMenu />
                <Switch>
                    <Route path="/user/home" component={Home} />
                    <Route path="/user/settings" component={Settings} />
                    <Route path="/user/refer" component={Refer} />
                    <Route path="/user/profile" component={Profile} />
                    <Route path="/user/review" component={Review} />
                </Switch>
            </div>
            <BottomNav />
        </>
    );
}
