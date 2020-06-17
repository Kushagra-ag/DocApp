import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home.js';
import Settings from './settings.js';
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
		        <Route  path="/user/home" component={Home} />
		        <Route  path="/user/settings" component={Settings} />
		    </Switch>
		</div>
		<BottomNav />
    </>
  );
}