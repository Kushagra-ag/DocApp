import React, { useState } from 'react';
import {Button, Typography, IconButton, Card, CardContent, CardActions, Collapse} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import VerticalMenu from './components/VerticalMenu.js';
import BottomNav from './components/BottomNav.js';
import TopBar from './components/TopBar.js';
import Privacy from './components/settings/privacy.js';
import Refer from './components/settings/refer.js';
import Faq from './components/settings/faq.js';
import About from './components/settings/about.js';
import SettingsBanner from './svg/settings.svg';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    textTransform: 'capitalize'
  },
  blueBtn: {
    color: '#fff',
    backgroundImage: "linear-gradient(to bottom, #5F7EBE, #3B5998)"
  },
}));

export default function Settings() {
	
	const classes = useStyles();
	const [privacy, setPrivacy] = React.useState(true);

  	const handleExpandClick = (el) => {
    	if(el === 'privacy')
    		setPrivacy(!privacy);
    	
 	};

	return(
		<>
			<TopBar />
			<div className="row settings">
				<VerticalMenu page="settings"/>
				<div className="col-md-9 col-lg-10 overflow-hidden">
					<div className="position-absolute d-none d-md-block" style={{right:'-10%',bottom:'-10%',width:'40%'}}>
						
				        	<img src={SettingsBanner} />
				        
				    </div>
					<div className="row pt-4">
						<div className="col-sm-9 col-md-6 text-center">
							<Privacy expanded={privacy} click={()=>handleExpandClick('privacy')} />
							<Refer />
							<Faq />
							<About />
								
							<Button variant="contained" className={`${classes.margin} ${classes.blueBtn}`} component={Link} to='#'>
				              	<Typography variant="caption" className={classes.margin}>
				                	Contact Us
				              	</Typography>
				            </Button>		
						    
						</div>
							
					</div>
				</div>
			</div>
			<BottomNav />
		</>
	)
}