import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        marginLeft: '-15px'
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

export default function MenuListComposition(props) {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState(props.page || 'home');

    const changeMenuSelected = el => {
        setSelectedItem(el);
    };

    return (
        <div className="col-3 col-lg-2 d-none d-md-block">
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <MenuList className="pt-4">
                        <Link to="/user/home" className={classes.link}>
                            <MenuItem
                                selected={selectedItem === 'home'}
                                onClick={() => changeMenuSelected('home')}
                            >
                                <HomeRoundedIcon
                                    color="primary"
                                    className={classes.margin}
                                />
                                <Typography variant="h6">Home</Typography>
                            </MenuItem>
                        </Link>
                        <Link to="#" className={classes.link}>
                            <MenuItem
                                selected={selectedItem === 'fav'}
                                onClick={() => changeMenuSelected('fav')}
                            >
                                <FavoriteRoundedIcon
                                    color="primary"
                                    className={classes.margin}
                                />
                                <Typography variant="h6">Favourites</Typography>
                            </MenuItem>
                        </Link>
                        <Link to="#" className={classes.link}>
                            <MenuItem
                                selected={selectedItem === 'profile'}
                                onClick={() => changeMenuSelected('profile')}
                            >
                                <PersonRoundedIcon
                                    color="primary"
                                    className={classes.margin}
                                />
                                <Typography variant="h6">Profile</Typography>
                            </MenuItem>
                        </Link>
                        {
                            // <Link to='#' className={classes.link}>
                            //           		<MenuItem selected={selectedItem==='search'} onClick={()=>changeMenuSelected('search')}>
                            // 		          	<SearchRoundedIcon color="primary" className={classes.margin}/>
                            // 		          	<Typography variant="h6">Search</Typography>
                            //           		</MenuItem>
                            //           	</Link>
                        }
                        <Link
                            to="/user/settings"
                            className={classes.link}
                            onClick={() => changeMenuSelected('settings')}
                        >
                            <MenuItem selected={selectedItem === 'settings'}>
                                <Typography variant="h6">Settings</Typography>
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Paper>
            </div>
        </div>
    );
}
