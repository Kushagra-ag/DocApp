import React from 'react';
import CustomTextField from '../../components/CustomTextField.js';
import {
    Typography,
    Button,
    Card,
    CardContent,
    MenuItem,
    InputAdornment,
    Avatar,
    IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import UserFav from '../../data/UserFav.js';
import user1 from '../../svg/user1.jpg';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginRight: theme.spacing(1)
    },
    rating: {
        '&>span': {
            padding: '0px 6px'
        }
    },
    blueBtn: {
        color: '#fff',
        backgroundImage: 'linear-gradient(to bottom, #5F7EBE, #3B5998)'
    },
    margin: {
        margin: theme.spacing(1),
        textTransform: 'capitalize'
    }
}));

export default function Favourites() {
    const classes = useStyles();
    return (
        <>
            <div className="col-md-4 text-center mb-4">
                <CustomTextField
                    placeholder="Search favourites list"
                    disableUnderline
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchRoundedIcon color="disabled" />
                        </InputAdornment>
                    }
                />
            </div>
            <div className="col-sm-8 text-center text-md-left col-lg-5">
                {UserFav.map(doctor => (
                    <div key={doctor.key}>
                        <Card className="p-3 mb-4">
                            <CardContent className="text-center text-md-left p-1">
                                <div className="row w-100">
                                    <div className="col-12 d-flex justify-content-around align-items-center">
                                        <Avatar
                                            src={user1}
                                            className={classes.avatar}
                                            variant="rounded"
                                            alt="contact"
                                        />
                                        <div>
                                            <Typography
                                                variant="h6"
                                                display="block"
                                                align="left"
                                            >
                                                {doctor.name}
                                            </Typography>

                                            <Typography
                                                display="block"
                                                variant="caption"
                                                align="left"
                                                className="text-black-50"
                                            >
                                                {doctor.speciality}
                                            </Typography>
                                            <div
                                                className={`text-center ${classes.rating}`}
                                            >
                                                <IconButton
                                                    aria-label="rating"
                                                    component="span"
                                                    color={
                                                        doctor.rating > 0
                                                            ? 'primary'
                                                            : 'default'
                                                    }
                                                    edge="start"
                                                >
                                                    <StarRoundedIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="rating"
                                                    component="span"
                                                    color={
                                                        doctor.rating > 1
                                                            ? 'primary'
                                                            : 'default'
                                                    }
                                                >
                                                    <StarRoundedIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="rating"
                                                    component="span"
                                                    color={
                                                        doctor.rating > 2
                                                            ? 'primary'
                                                            : 'default'
                                                    }
                                                >
                                                    <StarRoundedIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="rating"
                                                    component="span"
                                                    color={
                                                        doctor.rating > 3
                                                            ? 'primary'
                                                            : 'default'
                                                    }
                                                >
                                                    <StarRoundedIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="rating"
                                                    component="span"
                                                    color={
                                                        doctor.rating > 4
                                                            ? 'primary'
                                                            : 'default'
                                                    }
                                                >
                                                    <StarRoundedIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 text-left">
                                    <div className="col-12">
                                        <Typography
                                            variant="caption"
                                            className="my-2 mx-3"
                                            color="primary"
                                            display="block"
                                        >
                                            Remove from Favourites list
                                        </Typography>
                                        <Button
                                            startIcon={<LocationOnIcon />}
                                            variant="contained"
                                            className={`${classes.margin} ${classes.blueBtn}`}
                                            component={Link}
                                            to="#"
                                        >
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Typography
                                                    variant="body1"
                                                    className={classes.margin}
                                                >
                                                    Get Directions
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    className={`ml-3 text-white-50 ${classes.margin}`}
                                                >
                                                    {doctor.distance} km
                                                </Typography>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}
