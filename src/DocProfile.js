import React from 'react';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
import Exp from './svg/exp.svg';
import Rec from './svg/rec.svg';
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
  const matches = useMediaQuery('(max-width:767px)');
  const txt = matches ? 'textSecondary' : 'primary';
  return (
    <div className="container-fluid" style={{backgroundColor:'#F4F5FB'}} >
      <div className="row">
        <TopBar />
      </div>
      <div className="row mb-5">
        <div className="col-2 d-none d-md-block">
          <VerticalMenu />
        </div>
        <div className="col-md-10">
        	<div className="row pt-5 docProfile">
            <div className="col-md-4 d-flex justify-content-center">
              <div style={{overflow:'hidden',borderRadius:'10px',width:'maxContent'}}>
                <img src={doc1} />
              </div>
            </div>
            <div className="col-md-8 mt-3 mt-md-0 mb-n4 mb-md-n0 d-flex flex-column align-items-center align-items-md-start">
              <Typography variant="h4" color={txt} gutterBottom>
                Dr. Nirmala Reddy
              </Typography>
              <Typography variant="subtitle1" color={txt} gutterBottom>
                Gastroenterologists, MBBS
              </Typography>
                <div className="d-flex">
                  <Link to="#" className="m-2" style={{marginLeft: 0}} >
                    <IconButton className="docProfile--icons" color="primary" aria-label="call" component="div" edge="start">
                      <CallIcon />
                    </IconButton>
                  </Link>
                  <Link to="#" className='m-2'>
                      <IconButton className="docProfile--icons" color="primary" aria-label="location" component="div">
                        <LocationOnIcon />
                      </IconButton>
                  </Link>
                  <Link to="#" className="m-2">
                      <IconButton className="docProfile--icons" color="primary" aria-label="review" component="div">
                        <StarsRoundedIcon />
                      </IconButton>
                  </Link>
                </div>
            </div>
          </div>
          <div className="row my-5 my-md-4">
            <div className="col-md-4 text-center text-md-left">
              <Card className="d-inline-block" style={{display:'inlineBlock'}}>
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
                  
                  <Typography className="px-3" variant="subtitle2" color="primary">
                    7 of your friends <br/>recommend this doctor
                  </Typography>
                    
                  
                  <Link to="#" className={classes.margin}>
                   <IconButton color="primary" aria-label="call" component="span" size="medium" edge="start">
                      <ChevronRightIcon />
                    </IconButton>
                  </Link>
                </CardContent>
              </Card><br/>
              <Card className="my-4 d-inline-block d-md-block" style={{backgroundColor:'#5F82E2',maxWidth:'320px'}}>
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
                  <div className="d-flex mt-3">
                    <div className="text-center mx-2">
                      <img src={Exp} />
                      <Typography variant="body2" className="font-weight-bold">
                        25 years
                      </Typography>
                      <Typography variant="caption" className={`font-weight-bold ${classes.opacity50}`} gutterBottom>
                        Experience
                      </Typography>
                    </div>
                    <div className="text-center mx-2">
                      <img src={Rec} />
                      <Typography variant="body2" className="font-weight-bold">
                        10 awards
                      </Typography>
                      <Typography variant="caption" className={`font-weight-bold ${classes.opacity50}`} gutterBottom>
                        Recognition
                      </Typography>
                    </div>
                  </div>
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