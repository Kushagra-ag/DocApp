import React, { useState, useEffect } from 'react';
import FilledInput from '@material-ui/core/FilledInput';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DoctorTile from '../components/doctor/DoctorTile.js';
import Contact from './contact.js';
import doc1 from '../svg/doc1.jpg';
import DoctorList from '../data/DoctorList.js';
import importedStyles from '../styles/styles.js';

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

export default function Dashboard() {
    const classes = importedStyles();
    console.log(classes.blueBtn);
    const [doctorList, setDoctorList] = useState([]);
    const [loading, setLoading] = useState(true);
    const w = useMediaQuery('(max-width:575px)') ? 'w-100' : 'w-50';
    const width = useMediaQuery('(max-width:575px)') ? '200px' : '380px';

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

    useEffect(() => {
        const options = {
            'content-type': 'application/json'
        };

        axios
            .get('http://157.245.105.212:3000/api/doctors', {})
            .then(res => {
                setDoctorList(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });

        console.log(doctorList);
    }, []);

    const spinner = (
        <div className="col-12 col-xl-8 position-relative">
            <i
                className="fas fa-circle-notch fa-spin fa-2x my-2 position-absolute"
                style={{ top: '49%', left: '49%' }}
            ></i>
        </div>
    );

    return (
        <>
            {loading ? (
                spinner
            ) : (
                <div className="home col-xl-8 pl-md-5">
                    <div className="row pt-4">
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
                            <div className="d-flex justify-content-end align-content-center my-2">
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
                                <GridList
                                    className={`m-0 ${classes.gridList}`}
                                    cols={4.5}
                                >
                                    {doctorList.map(tile => (
                                        <GridListTile
                                            style={{
                                                height: 'unset',
                                                width: width
                                            }}
                                            key={tile._id}
                                        >
                                            <DoctorTile
                                                img={doc1}
                                                name={tile.name}
                                                speciality={tile.speciality}
                                                rating={tile.rating || 4}
                                                number={
                                                    tile.numberOfReviews || 5
                                                }
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
                                <GridList
                                    className={`m-0 ${classes.gridList}`}
                                    cols={4.5}
                                >
                                    {doctorList.map(tile => (
                                        <GridListTile
                                            style={{
                                                height: 'unset',
                                                width: width
                                            }}
                                            key={tile._id}
                                        >
                                            <DoctorTile
                                                img={doc1}
                                                name={tile.name}
                                                speciality={tile.speciality}
                                                rating={tile.rating || 4}
                                                number={
                                                    tile.numberOfReviews || 200
                                                }
                                            />
                                        </GridListTile>
                                    ))}
                                </GridList>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Contact />
        </>
    );
}
