import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const StyledNav = withStyles({
  root: {
    color: '#ecf1fc',
  },
  label: {
    textTransform: 'capitalize',
  },
})(BottomNavigationAction);

export default function BottomNav() {

	const [value, setValue] = useState('home');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return(
		<div className="row">
			<BottomNavigation value={value} onChange={handleChange} className="d-md-none" style={{position:'fixed',bottom:0,width:'100%'}}>			        
		        <StyledNav label="Home" value="home" icon={<HomeRoundedIcon />} />
		        <StyledNav label="Search" value="search" icon={<SearchRoundedIcon />} />
	            <StyledNav label="Favorites" value="favorites" icon={<FavoriteRoundedIcon />} />
			    <StyledNav label="Profile" value="profile" icon={<PersonRoundedIcon />} />
			    <StyledNav label="Menu" value="menu" icon={<MenuRoundedIcon />} />
			</BottomNavigation>
		</div>
	)
}