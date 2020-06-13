import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Introduction from './introduction.js';
import Home from './home.js';
import Auth from './auth/auth.js';
import DocProfile from './docProfile.js';
import Settings from './settings.js';

import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    text: {
      primary: '#000',
      secondary: '#fff'
    },
    primary: {
      main: '#5F82E2',
      dark: '#4A6BC5'
    },
    secondary: {
      main: '#4A6BC5'
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route path="/home" component={Home} />
        <Route  path="/auth" component={Auth} />
        <Route  path="/profile" component={DocProfile} />
        <Route  path="/settings" component={Settings} />
      </Switch>
    </ThemeProvider>
  );
}