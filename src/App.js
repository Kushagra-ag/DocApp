import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Home from './Home.js';
import Login from './Login.js';
import DocProfile from './DocProfile.js';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={DocProfile} />
      </Switch>
    </ThemeProvider>
    
  );
}

export default App;
