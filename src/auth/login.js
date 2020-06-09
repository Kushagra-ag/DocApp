import React from 'react';
import { Button, Typography, FilledInput, useMediaQuery } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AuthTextField from '../components/AuthTextField.js';
import DoctoIcon from '../components/DoctoIcon.js';


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
                Sign In
              </Typography>
            <AuthTextField id="phone" label="Phone Number" className={classes.margin} disableUnderline placeholder="Phone number" required />
            <AuthTextField id="pass" label="Password" type="password" className={classes.margin} disableUnderline color="primary" placeholder="Password" required />
            <Button variant="contained" className={`${classes.margin} ${classes.facebook}`} type="submit">
              <Typography variant="caption" className={classes.margin}>
                Sign In
              </Typography>
            </Button>
            <div className="py-2 text-center">
              <Typography variant="caption" color="primary" gutterBottom>
                <Link to="#" variant="inherit" style={{color:'inherit'}}>
            Forgot Password?
        </Link>
              </Typography>
            </div>
        </form>
    )
}

export default function Home() {
  const classes = useStyles();
  const color = useMediaQuery('(max-width:767px)') ? 'linear-gradient(225deg, rgba(74, 107, 197,0), rgba(95, 130, 226,0))' : 'linear-gradient(225deg, rgb(74, 107, 197), rgb(95, 130, 226))' ;

  return (
    <>
      <div className="row" style={{minHeight:'100vh'}}>
        <div className="col-md-6 d-flex justify-content-center" style={{backgroundImage:color, color:'#fff'}}>
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <DoctoIcon />
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center" style={{backgroundColor:'#F4F5FB'}}>
          <div className="d-flex flex-column">
            <Form />
            <div className="pt-4 pb-2 text-center">
              <Typography variant="caption" color="primary" gutterBottom>
              	<Link to="/auth/signup" variant="inherit" style={{color:'inherit'}}>
				          Don't have an account?
				        </Link>
              </Typography>
            </div>
            <Button variant="outlined" className={`${classes.margin}`} style={{backgroundColor: '#fff'}} href="/auth/signup">
              <Typography variant="caption" className={classes.margin}>
                Sign Up now
              </Typography>
            </Button> 
          </div>
        </div>
      </div>
    </>
  );
}