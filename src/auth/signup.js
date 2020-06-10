import React from 'react';
import { Button, Typography, FilledInput } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AuthTextField from '../components/AuthTextField.js';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    backgroundColor: '#fff',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    borderRadius: '20px'
  },
  margin: {
    margin: theme.spacing(1),
    textTransform: 'capitalize'
  },
  facebook: {
    color: '#fff',
    backgroundImage: "linear-gradient(to bottom, #5F7EBE, #3B5998)"
  },
  phone: {
    color: '#5F82E2',
    border: '1px solid #5F82E2',
    backgroundColor: '#fff'
  }
}));

function Form() {

  const classes = useStyles();
  return(
    <form className={classes.form} method="POST">
            <Typography variant="h6" className={classes.margin} gutterBottom>
                Register
            </Typography>
            <AuthTextField id="name" label="name" className={classes.margin} disableUnderline placeholder="Full Name" required />
            <AuthTextField id="phone" label="phone" className={classes.margin} disableUnderline placeholder="Phone number" required />
            <AuthTextField id="pass" label="password" type="password" className={classes.margin} disableUnderline color="primary" placeholder="Password" required />
            <Button variant="contained" className={`${classes.margin} ${classes.facebook}`} type="submit">
              <Typography variant="caption" className={classes.margin}>
                Sign Up
              </Typography>
            </Button>
            <div className="py-2 text-center">
              <Typography variant="caption" color="primary" component={Link} to="#" gutterBottom>
                
            Forgot Password?
        
              </Typography>
            </div>
        </form>
    )
}

export default function Signup() {
  const classes = useStyles();
  return (
    <>
      <div className="row" style={{minHeight:'100vh'}}>
        <div className="col-md-6 d-flex justify-content-center" style={{backgroundImage:'linear-gradient(225deg, #4A6BC5, #5F82E2)', color:'#fff'}}>
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <Typography variant="h4" gutterBottom>
                Hey There!
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Sign In to continue
              </Typography>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center" style={{backgroundColor:'#F4F5FB'}}>
          <div className="d-flex flex-column">
            <Form />
            <div className="pt-4 pb-2 text-center">
              <Typography variant="caption" color="primary" gutterBottom>
              	<Link to="/auth/login" variant="inherit" style={{color:'inherit'}}>
				          Already have an account?
				        </Link>
              </Typography>
            </div>
            <Button variant="outlined" className={`${classes.margin}`} style={{backgroundColor: '#fff'}} component={Link} to='/auth/login'>
              <Typography variant="caption" className={classes.margin}>
                Sign In now
              </Typography>
            </Button> 
          </div>
        </div>
      </div>
    </>
  );
}