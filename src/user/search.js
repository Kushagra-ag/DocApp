import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FilterListIcon from '@material-ui/icons/FilterList';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Contact from './contact.js';
import DoctorTile from '../components/doctor/DoctorTile.js';
import importedStyles from '../styles/styles.js';
import doc1 from '../svg/doc1.jpg';

export default function Search(props) {
    const [doctorList, setDoctorList] = useState([]);
    const [loading, setLoading] = useState(true);

    const classes = importedStyles();
    const width = useMediaQuery('(max-width:575px)') ? '200px' : '380px';

    let arr = useLocation().search.substr(1).split('&');
    arr.forEach(el => {
        let e = el.split('=');
        arr[e[0]] = e[1];
    });

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

    return (
        <>
            <div className="col-xl-8 pl-md-5">
                <div className="row pt-4">
                    <div className="col-12">
                        <Card className="d-flex justify-content-between align-items-center">
                            <CardContent>
                                <Typography variant="body1" color="primary">
                                    Sort by Distance
                                </Typography>
                                <Typography variant="caption" color="initial">
                                    23 general physicians near you
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton>
                                    <CallMadeIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                        <Card className="d-flex justify-content-between align-items-center my-3">
                            <CardContent>
                                <Typography variant="body1" color="primary">
                                    Sort by Rating
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton>
                                    <CallMadeIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
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
                                                        tile.numberOfReviews ||
                                                        5
                                                    }
                                                />
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}
