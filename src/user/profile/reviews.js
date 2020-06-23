import React, { useState } from 'react';
import CustomTextField from '../../components/CustomTextField.js';
import { Select, MenuItem, Typography, Card, CardContent, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import UserReviews from '../../data/UserReviews.js';
import styles from '../../styles/styles.js';
import doc1 from '../../svg/doc1.jpg';
import AntSwitch from '../../components/AntSwitch.js';

const useStyles = makeStyles(theme => ({

	avatar: {
		width: theme.spacing(24),
		height: theme.spacing(20),
	},
	rating: {
		'&>span': {
			padding: '10px 6px',
		}
	}
}))

export default function Reviews() {

	const classes = useStyles();
	const [filter, setFilter] = useState('date');
	const [state, setState] = useState(true);

	const handleChange = (event) => {
	    setFilter(event.target.value);
	};

	const handleStateChange = (event) => {
		setState(event.target.checked)
	}

	return(
		<>
			<div className=" mb-4 col-md-4 text-center">
				<Select
		        	labelId="demo-customized-select-label"
			       	id="demo-customized-select"
			       	// className={classes.margin}
			        disableUnderline
		            value={filter}
		         	onChange={handleChange}
			       	input={<CustomTextField />}
			        >
			      	
			      	<MenuItem value='date'>Sort by Date Reviewed</MenuItem>
		          	<MenuItem value='rating'>Sort by Rating</MenuItem>
		          	<MenuItem value='popularity'>Sort by Popularity</MenuItem>
			    </Select>
			</div>
			<div className="col-md-8">
            {
            	UserReviews.map( doctor => (

            		<div key={doctor.key}>
            			<Card className="p-3">
                                               <CardContent className="text-center text-md-left p-1">
                                                   <Typography
                                                       variant="h5"
                                                       display="block"
                                                       gutterBottom
                                                   >
                                                       You reviewed {doctor.name}
                                                   </Typography>
                                                   <Avatar src={doc1} variant="rounded" className={`my-3 mx-auto ${classes.avatar}`} alt="doctor" />
                                                   <div className={`text-center ${classes.rating}`}>
                                                   		<IconButton aria-label="rating" component="span" color={doctor.rating>1?'primary':'default'}>
								                          	<StarRoundedIcon />
								                        </IconButton>
								                        <IconButton aria-label="rating" component="span" color={doctor.rating>2?'primary':'default'}>
								                          	<StarRoundedIcon />
								                        </IconButton>
								                        <IconButton aria-label="rating" component="span" color={doctor.rating>3?'primary':'default'}>
								                          	<StarRoundedIcon />
								                        </IconButton>
								                        <IconButton aria-label="rating" component="span" color={doctor.rating>4?'primary':'default'}>
								                          	<StarRoundedIcon />
								                        </IconButton>
								                        <IconButton aria-label="rating" component="span" color={doctor.rating>5?'primary':'default'}>
								                          	<StarRoundedIcon />
								                        </IconButton>
                                                   </div>
                                                   <Typography
                                                       display="block"
                                                       variant="body1"
                                                       className="text-black-50"
                                                   >
                                                       Quis autem vel eum iure reprehenderit qui in
                                                       ea voluptate velit esse quam nihil molestiae
                                                       consequatur, vel illum qui dolorem eum
                                                       fugiat quo voluptas nulla pariatur
                                                   </Typography>
                                                   <div className="d-flex justify-content-between align-items-center mt-3">
                                                       <AntSwitch checked={state} onChange={handleStateChange} />
                                                       <Typography variant="body1" align="right">
                                                       	Show this Review to My Contacts Only
                                                       </Typography>
                                                   </div>
                                               </CardContent>
                                           </Card>
                                           <Card className="p-3 my-4" elevation={2}>
                                               <CardContent className="text-center text-md-left p-1">
                                                   <Typography
                                                       variant="h5"
                                                       display="block"
                                                       gutterBottom
                                                   >
                                                       Expertise
                                                   </Typography>
                                                   <Typography
                                                       display="block"
                                                       variant="body1"
                                                       style={{ opacity: "0.5" }}
                                                   >
                                                       Quis autem vel eum iure reprehenderit qui in
                                                       ea voluptate velit esse quam nihil molestiae
                                                       consequatur, vel illum qui dolorem eum
                                                       fugiat quo voluptas nulla pariatur
                                                   </Typography>
                                               </CardContent>
                                           </Card>
                    </div>

            	))
                                           
                                       
        	}
        	</div>
        </>
	)
}