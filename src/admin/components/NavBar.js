import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles
} from '@material-ui/core';
import { isAuthenticatedAdmin } from '../../core/helperMethods.js';

// import NavItem from './NavItem';

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Senior Developer'
};

const items = [
    {
        href: '/admin/dashboard',
        title: 'Dashboard'
    },
    {
        href: '/admin/doctors',
        title: 'Doctor List'
    },
    {
        href: '/admin/doctors/create',
        title: 'Create Doctor'
    },
    {
        href: '/admin/account',
        title: 'Account'
    },
    {
        href: '/admin/settings',
        title: 'Settings'
    },
];

const useStyles = makeStyles(() => ({
    mobileDrawer: {
        width: 256
    },
    desktopDrawer: {
        width: 256,
        top: 64,
        height: 'calc(100% - 64px)'
    },
    avatar: {
        cursor: 'pointer',
        width: 64,
        height: 64
    }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
    const classes = useStyles();
    const location = useLocation();

    const [profile, setProfile] = useState({});

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }

        const data = isAuthenticatedAdmin().data;
        setProfile(data.user);
    }, [location.pathname]);

    console.log(profile);

    const content = (
        <Box height="100%" display="flex" flexDirection="column">
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Avatar
                    className={classes.avatar}
                    component={RouterLink}
                    src={user.avatar}
                    to="/app/account"
                />
                <Typography
                    className={classes.name}
                    color="textPrimary"
                    variant="h5"
                >
                    {profile.name}
                </Typography>
                <Typography className={'text-black-50'} variant="body2">
                    {profile.email}
                </Typography>
            </Box>
            <Divider />
            <Box p={2}>
                <List>
                    {items.map((item, idx) => (
                        <RouterLink to={item.href} key={idx}>
                            <ListItem button>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </RouterLink>
                    ))}
                </List>
            </Box>
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.mobileDrawer }}
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer }}
                    open
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

NavBar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

NavBar.defaultProps = {
    onMobileClose: () => {},
    openMobile: false
};

export default NavBar;
