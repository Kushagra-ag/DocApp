import React, { useState, useLayoutEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Dashboard from './dashboard.js';
import NavBar from './components/NavBar.js';
import TopBar from './components/TopBar.js';
import Doctor from './doctors';
import User from './users';
import Account from './account.js';
import Logout from './logout.js';
import { isAuthenticatedAdmin } from '../core/helperMethods.js';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    }
}));

export default function Admin() {
    const history = useHistory();
    const classes = useStyles();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [authorized, setAuthorized] = useState(null);
    const [admin, setAdmin] = useState(null);

    useLayoutEffect(() => {

        isAuthenticatedAdmin()
            .then(data => {
                if(data.data.user.role) {
                    setAdmin(data.data);
                    setAuthorized(true);
                    
                } else {
                    history.push('/')
                }
            })

    });

    return (
        authorized ?
        <div className={classes.root}>
            <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />

            <NavBar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
                profile={admin}
            />
            <Switch>
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/doctor" render={props => (<Doctor {...props} profile={admin} />)} />
                <Route path="/admin/user" component={User} />
                <Route path="/admin/account" component={Account} />
                <Route path="/admin/logout" component={Logout} />
            </Switch>
        </div> : null
    );
}
