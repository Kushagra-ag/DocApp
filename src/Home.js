import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import banner1 from './svg/banner1.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  flex: {
    display: 'flex',
    justifyCcontent: 'center',
    alignItems: 'center'
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

function Home() {
  const classes = useStyles();
  return (
    <div className="container-fluid">
      <div className="row" style={{minHeight:'100vh'}}>
        <div className="col-md-6 d-flex justify-content-center" style={{backgroundImage:'linear-gradient(225deg, #4A6BC5, #5F82E2)', color:'#fff'}}>
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
              <img className="w-75 mb-3" src={banner1} alt="" />
              <Typography variant="h4" gutterBottom>
                Hey There!
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Sign In to continue
              </Typography>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column">
            <Button variant="contained" className={`${classes.margin} ${classes.facebook}`} startIcon={<FacebookIcon />}>
              <Typography variant="caption" className={classes.margin}>
                Continue with Facebook
              </Typography>
            </Button> 
            <Button variant="contained" className={`${classes.margin} ${classes.phone}`} component={Link} to="/login">
              <Typography variant="caption" className={classes.margin}>
                Sign in with Phone Number
              </Typography>
            </Button>
            <div className="pt-4 pb-2 text-center">
              <Typography variant="caption" color="primary" gutterBottom>
                <Link to="/signup" variant="inherit" style={{color:'inherit'}}>
                  Don't have an account?
              </Link>
              </Typography>
            </div>
            <Button variant="contained" className={`${classes.margin} ${classes.facebook}`}>
              <Typography variant="caption" className={classes.margin}>
                Sign Up now
              </Typography>
            </Button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;