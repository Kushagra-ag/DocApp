import React from 'react';
import {GridList, GridListTile, FilledInput, Button, Typography, InputAdornment } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VerticalMenu from './components/VerticalMenu.js';
import BottomNav from './components/BottomNav.js';
import TopBar from './components/TopBar.js';
import DoctorTile from './components/DoctorTile.js';
import doc1 from './svg/doc1.png';

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
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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

const tileData = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Home() {

  	const classes = useStyles();

	return(
		<>
			<TopBar />
			<div className="row">
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
					<div className="row mt-5">
						<div className="col-12">
							<div className={classes.root}>
						      	<GridList className={classes.gridList} cols={4.5}>
						        	{tileData.map((tile) => (
						          		<GridListTile key={tile} style={{height:'unset',width:'200px'}}>
						            		
						            		<DoctorTile img={doc1} />
						            		
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