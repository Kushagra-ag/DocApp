import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

export default function DoctorProfileIcons() {
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
            <a href="tel:+919999999999" className="m-2 ml-md-0">
                <IconButton
                    className="docProfile--icons"
                    color="primary"
                    aria-label="call"
                    component="div"
                >
                    <CallIcon />
                </IconButton>
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
            </Link>
            <Link to="/user/review" className="m-2">
                <IconButton
                    className="docProfile--icons"
                    color="primary"
                    aria-label="review"
                    component="div"
                >
                    <StarsRoundedIcon />
                </IconButton>
            </Link>
        </Paper>
    );
}
