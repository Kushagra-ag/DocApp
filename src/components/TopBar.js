import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SettingsIcon from '@material-ui/icons/Settings';

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
            color: `${theme.palette.primary.dark}!important`
        }
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();

    let arr = useLocation().search.substr(1).split('&');
    arr.forEach(el => {
        let e = el.split('=');
        arr[e[0]] = e[1];
    });

    const [search, setSearch] = useState(arr['query'] || '');

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

                        <div className={classes.search}>
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
            </div>
            <div className={`row d-none d-md-block ${classes.navBar}`}>
                <nav
                    className="navbar navbar-light bg-light px-5"
                    style={{ borderBottom: '1px solid #e9ecef' }}
                >
                    <Link className={`navbar-brand`} to="/user/home">
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
                    <ul className="navbar-nav ml-auto flex-row">
                        <li className="nav-item dropdown mr-3">
                            <a
                                className="nav-link px-2 dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Profile
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
                                    &nbsp; Account
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
                            </div>
                            {
                                //<KeyboardArrowDownIcon fontSize="small" />
                            }
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
