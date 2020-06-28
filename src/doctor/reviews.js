import React from 'react';
import { Typography, Card, CardContent, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import DoctorReviewsData from '../data/DoctorReviews.js';
import user1 from '../svg/user1.jpg';

const useStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginRight: theme.spacing(3),
	},
	rating: {
		'&>span': {
			padding: '0px 6px',
		}
	},
	action: {
		borderTop: '1px solid #00000020'
	}
}))

export default function Reviews() {
	const classes = useStyles();

	return(
		<>
			<div className="col-sm-8 text-center text-md-left col-lg-5 pt-4">
			{
            	DoctorReviewsData.map( review => (

            		<div key={review.key}>
            			<Card className="p-3 mb-4">
                                               <CardContent className="text-center text-md-left p-1">
	                                                <div className="d-flex justify-content-start align-items-center">
	                                                   <Avatar src={user1} className={classes.avatar} variant="rounded" alt="review" />
		                                                <div>
		                                                   <Typography
		                                                       variant="h6"
		                                                       display="block"
		                                                       align="left"
		                                                   >
		                                                       {review.name}
		                                                   </Typography>
		                                                   
		                                                   <div className={`text-center ${classes.rating}`}>
				                                                   		<IconButton aria-label="rating" component="span" color={review.rating>0?'primary':'default'} edge="start" size="small">
												                          	<StarRoundedIcon />
												                        </IconButton>
												                        <IconButton aria-label="rating" component="span" color={review.rating>1?'primary':'default'} size="small">
												                          	<StarRoundedIcon />
												                        </IconButton>
												                        <IconButton aria-label="rating" component="span" color={review.rating>2?'primary':'default'} size="small">
												                          	<StarRoundedIcon />
												                        </IconButton>
												                        <IconButton aria-label="rating" component="span" color={review.rating>3?'primary':'default'} size="small">
												                          	<StarRoundedIcon />
												                        </IconButton>
												                        <IconButton aria-label="rating" component="span" color={review.rating>4?'primary':'default'} size="small">
												                          	<StarRoundedIcon />
												                        </IconButton>
				                                                   </div>
				                                        </div>

		                                                   
		                                            </div>
		                                            <div className="my-4">
		                                            	<Typography className="text-black-50" variant="body1" align="left">
		                                            		{review.review}
		                                            	</Typography>
		                                            </div>
		                                            <div className={`d-flex justify-content-between align-items-center pt-1 ${classes.action}`}>
		                                            	<div>
		                                            		<IconButton aria-label="like" component="span" color={review.liked?'primary':'default'}>
												               	<ThumbUpRoundedIcon />
												            </IconButton>
		                                            	</div>
		                                            	<div>
		                                            		<Typography className="text-black-50" variant="caption">
		                                            			{review.time} ago
		                                            		</Typography>
		                                            	</div>
		                                            </div>
                                               </CardContent>
                                           </Card>
                                           
                    </div>

            	))
                                           
                                       
        	}
			</div>
		</>
	)
}