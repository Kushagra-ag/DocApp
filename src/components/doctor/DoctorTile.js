import React from 'react';
import {Typography, IconButton, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: '10px',
    wordBreak: 'break-all'
  },
  imgContainer: {
    borderRadius: 10,
    
    overflow: 'hidden'
  },
}));


export default function DoctorTile(props) {

	const classes = useStyles();
	return(
    <Link to="/doctor/places">
  		<Card className={`mx-2 px-2 ${classes.root}`}>
  			<div className={`mb-2 mx-n2 ${classes.imgContainer}`}>
  				<img src={props.img} className="w-100" alt="doctor image"/>
  			</div>
  			<Typography className="font-weight-bold" variant="body1">
  				{props.name}
  			</Typography>
  			<Typography className="text-black-50" variant="caption">
  	        	{props.speciality}
  		   	</Typography>
  		   	<div className="d-flex align-items-center mb-2">
  		   		<IconButton className="colorYellow" aria-label="review" component="div" size="small">
                      <StarRoundedIcon />
                  </IconButton>
                  <Typography className="colorYellow mx-2 font-weight-bold" variant="caption">
                  	{props.rating}
                  </Typography>
                  <Typography className="font-weight-bold homeReviewNo" variant="caption">
                  	{props.number}
                  </Typography>
  		   	</div>
  		</Card>
    </Link>
	)
}