import React from 'react';
import {
    useMediaQuery,
    GridList,
    GridListTile,
    FilledInput,
    Typography,
    InputAdornment,
    IconButton
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DoctorTile from '../components/doctor/DoctorTile.js';
import doc1 from '../svg/doc1.jpg';
import DoctorList from '../data/DoctorList.js';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden'
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        '&::-webkit-scrollbar': {
            width: 0
        }
    },
    navIcons: {
        '& svg': {
            zIndex: '10',
            fontSize: '70px'
        },
        '& button:focus,button:hover': {
            outline: 'none',
            backgroundColor: 'transparent'
        }
    }
}));

const CustomFilledInput = withStyles({
    root: {
        borderRadius: '10px',
        fontSize: '85%'
    },
    input: {
        padding: '10px 5px'
    }
})(FilledInput);

//const tileData = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Home() {
    const classes = useStyles();
    const w = useMediaQuery('(max-width:575px)') ? 'w-100' : 'w-50';

    const scrollLeft = event => {
        event.currentTarget.parentNode.nextSibling.scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    };
    const scrollRight = event => {
        event.currentTarget.parentNode.nextSibling.scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="home col-md-9 col-lg-10">
                <div className="row pt-5">
                    <div className="col-12">
                        <Typography variant="h5" gutterBottom>
                            Find Nearby Doctors and Clinics
                        </Typography>
                        <CustomFilledInput
                            className={`mt-2 ${w}`}
                            placeholder="Search Conditions, Specialities..."
                            disableUnderline
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchRoundedIcon color="disabled" />
                                </InputAdornment>
                            }
                        />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <div className={classes.root}>
                            <div
                                className={`d-none d-sm-flex w-100 h-100 position-absolute justify-content-between align-content-center ${classes.navIcons}`}
                            >
                                <IconButton
                                    disableRipple={true}
                                    disableFocusRipple={true}
                                    onClick={scrollLeft}
                                >
                                    <ChevronLeftIcon />
                                </IconButton>
                                <IconButton
                                    disableRipple
                                    disableFocusRipple
                                    onClick={scrollRight}
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </div>
                            <GridList className={classes.gridList} cols={4.5}>
                                {DoctorList.map(tile => (
                                    <GridListTile
                                        style={{
                                            height: 'unset',
                                            width: '200px'
                                        }}
                                        key={tile.key}
                                    >
                                        <DoctorTile
                                            img={doc1}
                                            name={tile.name}
                                            speciality={tile.speciality}
                                            rating={tile.rating}
                                            number={tile.numberOfReviews}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                </div>
                <div
                    className="row my-5 py-3"
                    style={{ backgroundColor: '#fff' }}
                >
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-content-center my-2">
                            <Typography
                                className="font-weight-bold"
                                variant="h5"
                                gutterBottom
                            >
                                Highest Rated Doctors
                            </Typography>
                            <Typography
                                variant="body1"
                                color="primary"
                                gutterBottom
                            >
                                View all
                            </Typography>
                        </div>
                        <div className={classes.root}>
                            <div
                                className={`d-none d-sm-flex w-100 h-100 position-absolute justify-content-between align-content-center ${classes.navIcons}`}
                            >
                                <IconButton
                                    disableRipple={true}
                                    disableFocusRipple={true}
                                    onClick={scrollLeft}
                                >
                                    <ChevronLeftIcon />
                                </IconButton>
                                <IconButton
                                    disableRipple
                                    disableFocusRipple
                                    onClick={scrollRight}
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </div>
                            <GridList className={classes.gridList} cols={4.5}>
                                {DoctorList.map(tile => (
                                    <GridListTile
                                        style={{
                                            height: 'unset',
                                            width: '200px'
                                        }}
                                        key={tile.key}
                                    >
                                        <DoctorTile
                                            img={doc1}
                                            name={tile.name}
                                            speciality={tile.speciality}
                                            rating={tile.rating}
                                            number={tile.numberOfReviews}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
