import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

export default function DoctorProfileIcons() {

	return(
		<div className="d-flex">
            <Link to="#" className="m-2 ml-md-0">
                <IconButton className="docProfile--icons" color="primary" aria-label="call" component="div">
                    <CallIcon />
                </IconButton>
            </Link>
            <Link to="#" className='m-2'>
                <IconButton className="docProfile--icons" color="primary" aria-label="location" component="div">
                    <LocationOnIcon />
                </IconButton>
            </Link>
            <Link to="#" className="m-2">
                <IconButton className="docProfile--icons" color="primary" aria-label="review" component="div">
                    <StarsRoundedIcon />
                </IconButton>
            </Link>
        </div>
    )
}