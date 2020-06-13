import React from 'react';
import {GridList, GridListTile, FilledInput, Typography, InputAdornment } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VerticalMenu from './components/VerticalMenu.js';
import BottomNav from './components/BottomNav.js';
import TopBar from './components/TopBar.js';
import DoctorTile from './components/DoctorTile.js';
import doc1 from './svg/doc1.png';
import DoctorList from './data/DoctorList.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  	'&::-webkit-scrollbar': {
	    width: 0
  	},
  },
}));

const CustomFilledInput = withStyles({
  root: {
    borderRadius: '10px',
    transform: 'scale(0.8)'
  },
  input: {
    padding: '15px 12px',
  },
})(FilledInput);

//const tileData = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Home() {

  	const classes = useStyles();

	return(
		<>
			<TopBar />
			<div className="row home">
				<VerticalMenu page="home"/>
				<div className="col-md-10">
					<div className="row pt-5">
						<div className="col-12">
							<Typography variant="h5" gutterBottom>
				               	Find nearby doctors and clinic
							</Typography>
							<CustomFilledInput placeholder="Search Conditions, Specialities..." disableUnderline startAdornment={<InputAdornment position="start"><SearchRoundedIcon /></InputAdornment>} />
					    </div>
					</div>
					<div className="row my-5">
						<div className="col-12">
							<div className={classes.root}>
						      	<GridList className= {classes.gridList} cols={4.5}>
						        	{DoctorList.map((tile) => (
						          		<GridListTile style={{height:'unset',width:'200px'}} key={tile.key}>
						            		
						            		<DoctorTile img={doc1} name={tile.name} speciality={tile.speciality} rating={tile.rating} number={tile.numberOfReviews} />
						            		
						            	</GridListTile>
							        ))}
							    </GridList>
							</div>
						</div>
					</div>
					<div className="row my-5 py-3" style={{backgroundColor:'#fff'}}>
						<div className="col-12">
							<div className="d-flex justify-content-between align-content-center my-2">
								<Typography className="font-weight-bold" variant="h5" gutterBottom>
					               	Highest Rated Doctors
								</Typography>
								<Typography variant="body1" color="primary" gutterBottom>
					               	View all
								</Typography>
							</div>
							<div className={classes.root}>
						      	<GridList className= {classes.gridList} cols={4.5}>
						        	{DoctorList.map((tile) => (
						          		<GridListTile key={tile} style={{height:'unset',width:'200px'}} key={tile.key}>
						            		
						            		<DoctorTile img={doc1} name={tile.name} speciality={tile.speciality} rating={tile.rating} number={tile.numberOfReviews} />
						            		
						            	</GridListTile>
							        ))}
							    </GridList>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BottomNav />
		</>
	)
}