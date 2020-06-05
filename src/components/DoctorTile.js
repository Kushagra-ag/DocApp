import React from 'react';
import {Typography, IconButton, Card, CardContent } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: 'unset',
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
		<Card className={`mx-4 px-2 ${classes.root}`}>
			<div className={`mb-2 mx-n2 ${classes.imgContainer}`}>
				<img src={props.img} />
			</div>
			<Typography className="font-weight-bold" variant="body1">
				Dr. Nirmala Reddy
			</Typography>
			<Typography className="text-black-50" variant="caption">
	        	Gastroenterologists
		   	</Typography>
		   	<div className="d-flex align-items-center mb-2">
		   		<IconButton className="colorYellow" aria-label="review" component="div" size="small">
                    <StarRoundedIcon />
                </IconButton>
                <Typography className="colorYellow mx-2 font-weight-bold" variant="caption">
                	4.5
                </Typography>
                <Typography className="font-weight-bold homeReviewNo" variant="caption">
                	211
                </Typography>
		   	</div>
		</Card>
	)
}