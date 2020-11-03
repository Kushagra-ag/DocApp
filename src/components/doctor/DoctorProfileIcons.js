import React from 'react';
import { IconButton, Typography, useMediaQuery, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

export default function DoctorProfileIcons(props) {
    const smallWidth = {
        backgroundColor: '#fff',
        elevation: 2
    };
    const largeWidth = {
        backgroundColor: 'transparent',
        elevation: 0
    };
    const styles = useMediaQuery('(max-width:767px)') ? smallWidth : largeWidth;

    return (
        <Paper
            className="d-flex px-md-0 px-3 mt-3 mt-md-0"
            elevation={styles.elevation}
            style={{
                backgroundColor: styles.backgroundColor,
                borderRadius: 16
            }}
        >
            <a href={`tel:${props.contact}`} className="m-2 ml-md-0">
                <IconButton
                    className="docProfile--icons"
                    color="primary"
                    aria-label="call"
                    component="div"
                >
                    <CallIcon />
                </IconButton>
                <Typography variant="caption" className="font-weight-bold" align="center" display="block" color="primary">Call</Typography>
            </a>
            <Link to="/doctor/places" className="m-2">
                <IconButton
                    className="docProfile--icons"
                    color="primary"
                    aria-label="location"
                    component="div"
                >
                    <LocationOnIcon />
                </IconButton>
                <Typography variant="caption" className="font-weight-bold" align="center" display="block" color="primary">Directions</Typography>
            </Link>
            <Link to={`/user/review/${props.id}`} className="m-2">
                <IconButton
                    className="docProfile--icons"
                    color="primary"
                    aria-label="review"
                    component="div"
                >
                    <StarsRoundedIcon />
                </IconButton>
                <Typography variant="caption" className="font-weight-bold" align="center" display="block" color="primary">Rate</Typography>
            </Link>
        </Paper>
    );
}
