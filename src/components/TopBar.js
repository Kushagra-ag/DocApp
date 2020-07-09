import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

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
    navBrand: {
        fontSize: '32px',
        color: theme.palette.primary.dark
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();

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
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <div className="row d-none d-md-block">
                <nav
                    className="navbar navbar-light bg-light px-5"
                    style={{ borderBottom: '1px solid #e9ecef' }}
                >
                    <a className={`navbar-brand ${classes.navBrand}`} href="#">
                        Docto.
                    </a>
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
                                <a className="dropdown-item" href="#">
                                    {' '}
                                    <PersonRoundedIcon />
                                    &nbsp; Account
                                </a>
                                <a className="dropdown-item" href="#">
                                    <FavoriteRoundedIcon />
                                    &nbsp; Favourites
                                </a>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </div>
                            {
                                //<KeyboardArrowDownIcon fontSize="small" />
                            }
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link px-2" href="#">
                                Contact Us{' '}
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="navbar navbar-light bg-light pt-3 px-5">
                    <ul className="navbar-nav ml-auto flex-row">
                        <li className="nav-item">
                            <div className="input-group input-group-sm">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    aria-label="Location"
                                />
                                <div className="input-group-append">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1"
                                        style={{ backgroundColor: '#4A6BC5' }}
                                    >
                                        <SearchIcon
                                            className={classes.white}
                                            fontSize="small"
                                        />
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
