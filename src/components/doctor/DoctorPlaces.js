import React from 'react';
import {
    Button,
    Typography,
    IconButton,
    Card,
    CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        textTransform: 'capitalize'
    },
    blueBtn: {
        color: '#fff',
        backgroundImage: 'linear-gradient(to bottom, #5F7EBE, #3B5998)'
    }
}));

export default function DoctorPlace(props) {
    const classes = useStyles();

    return (
        <Card className="my-3 d-inline-block">
            <CardContent className="text-left">
                <div className="row">
                    <div className="col-12">
                        <IconButton
                            className="mr-2"
                            size="small"
                            component="span"
                        >
                            <LocationOnIcon />
                        </IconButton>
                        <Typography
                            className="font-weight-bold"
                            variant="body1"
                            display="inline"
                        >
                            Hospital
                        </Typography>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                        <Typography
                            variant="body1"
                            color="textPrimary"
                            style={{ marginLeft: 'calc(0.5rem + 30px)' }}
                        >
                            {props.values.address1}
                            <br /> {props.values.address2}
                        </Typography>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
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
                                    {props.values.distance}
                                </Typography>
                            </div>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
