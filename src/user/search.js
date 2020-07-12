import React from 'react';
import {
    useMediaQuery,
    Card,
    CardContent,
    CardActions,
    Typography,
    InputAdornment,
    IconButton
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FilterListIcon from '@material-ui/icons/FilterList';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Contact from './contact.js';

export default function Search(props) {
    console.log(useLocation().search);
    let arr = useLocation().search.substr(1).split('&');
    arr.forEach(el => {
        let e = el.split('=');
        arr[e[0]] = e[1];
    });
    console.log(arr);
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
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}
