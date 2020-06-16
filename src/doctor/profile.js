import React from 'react';
import {useMediaQuery, Typography, IconButton, Card, CardContent } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import justin from '../svg/justin.png';
import ryan from '../svg/ryan.png';
import lara from '../svg/lara.png';
import doc1 from '../svg/doc1.jpg';
import VerticalMenu from '../components/VerticalMenu.js';
import TopBar from '../components/TopBar.js';
import ExperienceIcon from '../components/ExperienceIcon.js';
import DoctorProfileIcons from '../components/DoctorProfileIcons.js';
import BottomNav from '../components/BottomNav.js';


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

export default function Profile() {
  const classes = useStyles();
  const txt = useMediaQuery('(max-width:767px)') ? 'textSecondary' : 'primary';
  
  return (
    <>
      <TopBar />
      <div className="row">
        <VerticalMenu />
        <div className="col-md-9 col-lg-10">
        	<div className="row pt-4 docProfile">
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
              <DoctorProfileIcons />
            </div>
          </div>
          <div className="row my-5 my-md-4">
            <div className="col-md-4 text-center text-md-left">
              <Card className="d-inline-block">
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
              <Card className="my-4 d-inline-block d-md-block" style={{backgroundColor:'#5F82E2',width:'320px',maxWidth:'100%'}}>
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
                <CardContent className="text-center text-md-left p-1">
                  <Typography variant="h5" display='block' gutterBottom>
                    About Dr. Nirmala Reddy
                  </Typography>
                  <Typography display="block" variant="body1" style={{opacity:'0.5'}}>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </Typography>
                  <div className="d-flex mt-3">
                    <ExperienceIcon type="experience" number="25" />
                    <ExperienceIcon type="recognition" number="10" />
                  </div>
                </CardContent>
              </Card>
              <Card className="p-3 my-4" elevation={2}>
                <CardContent className="text-center text-md-left p-1">
                  <Typography variant="h5" display='block' gutterBottom>
                    Expertise
                  </Typography>
                  <Typography display="block" variant="body1" style={{opacity:'0.5'}}>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>      
  );
}