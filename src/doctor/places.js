import React from 'react';
import {Button, Typography, IconButton, Card, CardContent, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import VerticalMenu from '../components/VerticalMenu.js';
import BottomNav from '../components/BottomNav.js';
import TopBar from '../components/TopBar.js';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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

export default function Places() {
	const classes = useStyles();
	return(
		<>
			<TopBar />
			<div className="row">
				<VerticalMenu />
				<div className="col-md-9 col-lg-10 overflow-hidden text-center text-sm-left">
					<div className="row pt-4">
						<div className="col-12">
							<div className="row">
								<div className="col-12">
									<Typography color="primary" variant="h5">
										This doctor has multiple places. Please select any to get directions.
									</Typography>
								</div>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-sm-9 col-md-6">
							<Card className="my-3 d-inline-block">
								<CardContent className="text-left">
									<div className="row">
										<div className="col-12">
											<IconButton className="mr-2" size="small" component="span">
												<LocationOnIcon />
											</IconButton>
											<Typography className="font-weight-bold" variant="body1" display="inline">
												Hospital
											</Typography>
										</div>
									</div>
									<div className="row my-2">
										<div className="col-12">
											<Typography variant="body1" color="textPrimary" style={{marginLeft:'calc(0.5rem + 30px)'}}>
												654  Masonic Drive,<br/> Belfry, MT, 59008
											</Typography>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<Button startIcon={<LocationOnIcon />} variant="contained" className={`${classes.margin} ${classes.blueBtn}`} component={Link} to='#'>
									            <div className="d-flex justify-content-between align-items-center">
									              	<Typography variant="body1" className={classes.margin}>
									                	Get Directions
									              	</Typography>
									              	<Typography variant="caption" className={`ml-3 text-white-50 ${classes.margin}`}>
									                	3.2 km
									              	</Typography>

									            </div>
								            </Button>
								        </div>
								    </div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
			<BottomNav />
		</>
	)
}