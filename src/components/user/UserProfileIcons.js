import React, { useState } from 'react';
import { Typography, IconButton, Paper, useMediaQuery } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import path from 'path';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

export default function UserProfileIcons() {

    const location = path.basename(useLocation().pathname);
    console.log(location);
	const [color, setColor] = useState({
		contacts: location==='contacts',
		reviews: location==='reviews' || location==='profile',
		favourites: location==='favourites',
	});

    function handleChange(state) {
        setColor({
            contacts: state==='contacts',
            reviews: state==='reviews',
            favourites: state==='favourites',
        });

    }

    const smallWidth = {
        backgroundColor: '#fff',
        elevation: 2,
    }
    const largeWidth = {
        backgroundColor: 'transparent',
        elevation: 0,
    }
    const styles = useMediaQuery('(max-width:767px)') ? smallWidth : largeWidth;

	return(
		<Paper className="d-flex px-md-0 px-3 mt-3" elevation={styles.elevation} style={{backgroundColor: styles.backgroundColor, borderRadius:16}}>
            <Link to="contacts" className="my-2 mx-4 ml-md-0 text-center" onClick={() => {handleChange('contacts')}}>
                <Typography className="font-weight-bold" display="block" variant="h5" color={color.contacts ? 'primary' : 'textPrimary'}>
                    56
                </Typography>
                <Typography display="block" variant="caption" color={color.contacts ? 'primary' : 'textPrimary'}>
                    Contacts
                </Typography>
            </Link>
            <Link to="reviews" className="my-2 mx-4 ml-md-0 text-center" onClick={() => {handleChange('reviews')}}>
                <Typography className="font-weight-bold" display="block" variant="h5" color={color.reviews ? 'primary' : 'textPrimary'}>
                    12
                </Typography>
                <Typography display="block" variant="caption" color={color.reviews ? 'primary' : 'textPrimary'}>
                    Reviews
                </Typography>
            </Link>
            <Link to="favourites" className="my-2 mx-4 ml-md-0 text-center" onClick={() => {handleChange('favourites')}}>
                <Typography className="font-weight-bold" display="block" variant="h5" color={color.favourites ? 'primary' : 'textPrimary'}>
                    6
                </Typography>
                <Typography display="block" variant="caption" color={color.favourites ? 'primary' : 'textPrimary'}>
                    Favourites
                </Typography>
            </Link>
        </Paper>
    )
}