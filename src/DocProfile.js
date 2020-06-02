import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Router, Switch, Link } from 'react-router-dom';
import justin from './svg/justin.png';
import ryan from './svg/ryan.png';
import lara from './svg/lara.png';
import doc1 from './svg/doc1.png';
import VerticalMenu from './components/VerticalMenu.js';
import TopBar from './components/TopBar.js';


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
  },
  imgContainer: {
    position: 'absolute',
    borderRadius: 10,
    border: '2px solid #fff',
    overflow: 'hidden'
  },
  opacity50: {
    opacity: '0.5'
  }
}));

function DocProfile() {
  const classes = useStyles();
  return (
    <div className="container-fluid" style={{backgroundColor:'#F4F5FB'}} elevation={3}>
      <div className="row">
        <TopBar />
      </div>
      <div className="row mb-5">
        <div className="col-2 d-none d-md-block">
          <VerticalMenu />
        </div>
        <div className="col-md-10 pt-5">
        	<div className="row">
            <div className="col-md-4">
              <div style={{overflow:'hidden',borderRadius:'10px',width:'maxContent'}}>
                <img src={doc1} />
              </div>
            </div>
            <div className="col-md-8">
              <Typography variant="h4" color="primary" gutterBottom>
                Dr. Nirmala Reddy
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Gastroenterologists, MBBS
              </Typography>
              
                  <Link to="#" className={classes.margin} style={{marginLeft: 0}} >
                    <IconButton color="primary" aria-label="call" component="span" edge="start">
                      <CallIcon />
                    </IconButton>
                  </Link>
                  <Link to="#" className={classes.margin}>
                      <IconButton color="primary" aria-label="location" component="span">
                        <LocationOnIcon />
                      </IconButton>
                  </Link>
                  <Link to="#" className={classes.margin}>
                      <IconButton color="primary" aria-label="review" component="span">
                        <StarsRoundedIcon />
                      </IconButton>
                  </Link>
                
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4">
              <Card style={{width:'maxContent'}}>
                <CardContent className="d-flex justify-content-around align-items-center" style={{padding:'5px'}}>
                  <div>
                    <div className={classes.imgContainer} style={{zIndex:10}}>
                      <img src={justin} />
                    </div>
                    <div className={classes.imgContainer} style={{marginLeft:'20px', zIndex: 5}}>
                      <img src={ryan} />
                    </div>
                    <div className={classes.imgContainer} style={{marginLeft:'40px',position:'relative'}}>
                      <img src={lara} />
                    </div>
                  </div>
                  
                  <Typography variant="subtitle2" color="primary">
                    7 of your friends <br/>recommend this doctor
                  </Typography>
                    
                  
                  <Link to="#" className={classes.margin}>
                   <IconButton color="primary" aria-label="call" component="span" size="medium" edge="start">
                      <ChevronRightIcon />
                    </IconButton>
                  </Link>
                </CardContent>
              </Card>
              <Card className="my-4" style={{backgroundColor:'#5F82E2',width:'maxContent'}}>
                    <CardContent className="d-flex justify-content-around align-items-center" style={{padding:'5px'}}>
                      
                      <Link to="#" className={classes.margin}>
                        <IconButton aria-label="rating" component="span" style={{color:'#fff',border:'3px solid #3654A8'}}>
                          <StarRoundedIcon fontSize="large" />
                        </IconButton>
                      </Link>
                      
                      <div className="d-flex justify-content-around align-items-left flex-column" style={{color:'#fff'}}>
                        <Typography variant="h6">
                          4.5
                        </Typography>
                        <Typography variant="subtitle2">
                          1800 reviews
                        </Typography>
                      </div>
                      <Link to="#" className={classes.margin} edge="start">
                        <IconButton aria-label="call" component="span" style={{color:'#fff'}}>
                          <ChevronRightIcon />
                        </IconButton>
                      </Link>
                    </CardContent>
              </Card>
            </div>
            <div className="col-md-8">
              <Card className="p-3">
                <CardContent style={{padding:'5px'}}>
                  <Typography variant="h5" display='block' gutterBottom>
                    About Dr. Nirmala Reddy
                  </Typography>
                  <Typography className="w-75" display="block" variant="body1" style={{opacity:'0.5'}}>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </Typography>
                </CardContent>
              </Card>
              <Card className="p-3 my-4" elevation={2}>
                <CardContent style={{padding:'5px'}}>
                  <Typography variant="h5" display='block' gutterBottom>
                    Expertise
                  </Typography>
                  <Typography className="w-75" display="block" variant="body1" style={{opacity:'0.5'}}>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
          
        
  );
}

export default DocProfile;