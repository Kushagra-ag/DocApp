import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    marginLeft: '-15px',
  },
  margin: {
    margin: theme.spacing(1)
  },
  paper: {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    width: '100%'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();


  return (
    <div className="col-2 d-none d-md-block">
	    <div className={classes.root}>
	      <Paper className={classes.paper}>
	        <MenuList className="pt-5">
	        	<Link to='/home' className={classes.link}>
		          	<MenuItem>
				    	<HomeRoundedIcon color="primary" className={classes.margin}/>
			          	<Typography variant="h6">Home</Typography>
		        	</MenuItem>
		        </Link>
		        <Link to='#' className={classes.link}>
	          		<MenuItem>
			          	<FavoriteRoundedIcon color="primary" className={classes.margin}/>
			          	<Typography variant="h6">Favourites</Typography>
	          		</MenuItem>
	          	</Link>
	          	<Link to='#' className={classes.link}>
	          		<MenuItem>
			          	<PersonRoundedIcon color="primary" className={classes.margin}/>
			          	<Typography variant="h6">Profile</Typography>
	          		</MenuItem>
	          	</Link>
	          	<Link to='#' className={classes.link}>
	          		<MenuItem>
			          	<SearchRoundedIcon color="primary" className={classes.margin}/>
			          	<Typography variant="h6">Search</Typography>
	          		</MenuItem>
	          	</Link>
	        </MenuList>
	      </Paper>
	      
	    </div>
	</div>
  );
}