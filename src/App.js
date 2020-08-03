import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Home from './home.js';
import Auth from './auth/index.js';
import Doctor from './doctor/index.js';
import User from './user/index.js';

import './App.css';

// 5F82E2

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        }
    },
    typography: {
        fontFamily: [
            'Nunito Sans',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(',')
    },
    palette: {
        text: {
            primary: '#000',
            secondary: '#fff'
        },
        primary: {
            main: '#4A6BC5'
        },
        secondary: {
            main: '#4A6BC5'
        }
    },
    shape: {
        borderRadius: '10px'
    }
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Auth} />
                <Route path="/user" component={User} />
                <Route path="/doctor" component={Doctor} />
            </Switch>
        </ThemeProvider>
    );
}
