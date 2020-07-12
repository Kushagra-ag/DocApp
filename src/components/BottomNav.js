import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SettingsIcon from '@material-ui/icons/Settings';

const StyledNav = withStyles({
    root: {
        color: '#a5aab5'
    },
    label: {
        textTransform: 'capitalize'
    }
})(BottomNavigationAction);

export default function BottomNav() {
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="row d-md-none">
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className="col-12 w-100 position-fixed"
                style={{ bottom: 0 }}
            >
                <StyledNav
                    label="Home"
                    value="home"
                    icon={<HomeRoundedIcon />}
                    component={Link}
                    to="/user/home"
                />
                {
                    //<StyledNav label="Search" value="search" icon={<SearchRoundedIcon />} />
                }
                <StyledNav
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteRoundedIcon />}
                    component={Link}
                    to="/user/profile/favourites"
                />
                <StyledNav
                    label="Profile"
                    value="profile"
                    icon={<PersonRoundedIcon />}
                    component={Link}
                    to="/user/profile/reviews"
                />
                <StyledNav
                    label="Settings"
                    value="settings"
                    icon={<SettingsIcon />}
                    component={Link}
                    to="/user/settings"
                />
            </BottomNavigation>
        </div>
    );
}
