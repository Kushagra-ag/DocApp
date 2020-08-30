import React, { useState, useLayoutEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import CancelIcon from '@material-ui/icons/Cancel';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { isAuthenticated, deauthenticate } from '../core/helperMethods.js';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    toolbar: {
        backgroundColor: theme.palette.primary.dark
    },
    white: {
        color: theme.palette.text.secondary
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch'
            }
        }
    },
    navBar: {
        '& .navbar-brand': {
            fontSize: '32px',
            color: theme.palette.primary.dark
        },
        '& .nav-link': {
            '&:not(.login)': {
                color: `${theme.palette.primary.dark}!important`
            }
        }
    },
    login: {
        backgroundColor: '#fff',
        color: theme.palette.primary.main,
        [theme.breakpoints.up('md')]: {
            backgroundColor: '#4a6bc5',
            color: `${theme.palette.common.white}!important`,
            borderRadius: '10px'
        }
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const history = useHistory();
    const [user, setUser] = useState('');
    const [display, setDisplay] = useState('flex');

    useLayoutEffect(() => {
        let data = isAuthenticated().data;
        if (data) setUser(data.user.name.split(' ')[0]);
        else setUser(undefined);
    }, []);

    let arr = useLocation().search.substr(1).split('&');
    arr.forEach(el => {
        let e = el.split('=');
        arr[e[0]] = e[1];
    });

    const [search, setSearch] = useState(arr['query'] || '');

    async function signout() {
        await deauthenticate();
        history.push('/auth/login');
    }

    const close = () => {
        setDisplay('none');
    };

    const loginBtn = (
        <a
            className={`nav-link px-4 py-1 login ${classes.login}`}
            href="/auth/login"
        >
            Login
        </a>
    );

    return (
        <>
            <div className={`row d-md-none ${classes.root}`}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            Docto.
                        </Typography>

                        <div className={`mr-2 ${classes.search}`}>
                            <form method="GET" action="/user/search">
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    name="query"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    defaultValue={search}
                                />
                            </form>
                        </div>
                    </Toolbar>
                </AppBar>
                <nav
                    className="navbar px-2 w-100"
                    style={{ backgroundColor: '#fff', display: display }}
                >
                    <Typography>
                        Download the &nbsp;
                        <Link to="#">
                            <u>Docto app </u>
                        </Link>
                    </Typography>

                    <IconButton
                        disableRipple
                        disableFocusRipple
                        onClick={close}
                    >
                        <CancelIcon />
                    </IconButton>
                </nav>
            </div>
            <div className={`row d-none d-md-block ${classes.navBar}`}>
                <nav
                    className="navbar navbar-light bg-light px-5"
                    style={{ borderBottom: '1px solid #e9ecef' }}
                >
                    <Link className={`navbar-brand`} to="/user/dashboard">
                        Docto.
                    </Link>
                    <ul className="navbar-nav mr-auto ml-4 flex-row">
                        <li className="nav-item">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1"
                                    >
                                        <LocationOnIcon fontSize="small" />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Location"
                                    aria-label="Location"
                                />
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto flex-row align-items-center">
                        <li className="nav-item dropdown mr-3">
                            {user ? (
                                <React.Fragment>
                                    <a
                                        className="nav-link px-2 dropdown-toggle text-capitalize"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {user}
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    </a>
                                    <div
                                        className="dropdown-menu position-absolute"
                                        style={{ left: 'auto', right: 0 }}
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <Link
                                            className="dropdown-item"
                                            to="/user/profile"
                                        >
                                            <PersonRoundedIcon color="secondary" />
                                            &nbsp; Profile
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            to="/user/profile/favourites"
                                        >
                                            <FavoriteRoundedIcon color="secondary" />
                                            &nbsp; Favourites
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            to="/user/settings"
                                        >
                                            <SettingsIcon color="secondary" />
                                            &nbsp; Settings
                                        </Link>
                                        <div
                                            className="dropdown-item"
                                            style={{ cursor: 'pointer' }}
                                            onClick={signout}
                                        >
                                            <ExitToAppIcon color="secondary" />
                                            &nbsp; Sign Out
                                        </div>
                                    </div>
                                </React.Fragment>
                            ) : (
                                loginBtn
                            )}
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link px-2" href="#">
                                Contact Us
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="navbar navbar-light bg-light pt-3 px-5">
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item">
                            <Link to="#">
                                <u>
                                    <Typography>
                                        Click here to download the Docto app
                                    </Typography>
                                </u>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto flex-row">
                        <li className="nav-item">
                            <form method="GET" action="/user/search">
                                <div className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        aria-label="Location"
                                        name="query"
                                        defaultValue={search}
                                        required
                                    />
                                    <div className="input-group-append position-relative">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                            style={{
                                                backgroundColor: '#4A6BC5'
                                            }}
                                        >
                                            <SearchIcon
                                                className={classes.white}
                                                fontSize="small"
                                            />
                                        </span>
                                        <input
                                            type="submit"
                                            className="position-absolute w-100"
                                            style={{ opacity: 0 }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
