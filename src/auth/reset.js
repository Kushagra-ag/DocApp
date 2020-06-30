import React, { useState } from 'react';
import { Button, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField.js';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 500
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceAround',
        backgroundColor: '#fff',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: '10px'
    },
    margin: {
        margin: theme.spacing(1),
        textTransform: 'capitalize'
    }
}));

function Form() {
    const classes = useStyles();
    const [display, setDisplay] = useState('none');
    const [type, setType] = useState('button');

    const stateChange = () => {
        setDisplay('block');
        setType('submit');
    };

    return (
        <form className={classes.form} method="POST">
            <Typography variant="h6" className={classes.margin} gutterBottom>
                Forgot Password
            </Typography>
            <CustomTextField
                id="phone"
                label="phone"
                className={classes.margin}
                disableUnderline
                placeholder="Phone number"
                required
            />
            <CustomTextField
                id="otp"
                label="otp"
                className={classes.margin}
                disableUnderline
                color="primary"
                placeholder="OTP"
                required
                style={{ display: display }}
            />
            <Button
                variant="contained"
                className={`${classes.margin} ${classes.facebook}`}
                type={type}
                onClick={stateChange}
            >
                <Typography variant="caption" className={classes.margin}>
                    Continue
                </Typography>
            </Button>
        </form>
    );
}

export default function Reset() {
    const classes = useStyles();
    const match = useMediaQuery('(max-width:767px)') ? true : false;
    const color = match
        ? 'linear-gradient(225deg, rgba(74, 107, 197,0), rgba(95, 130, 226,0))'
        : 'linear-gradient(225deg, rgb(74, 107, 197), rgb(95, 130, 226))';
    const txt = match ? 'textPrimary' : 'textSecondary';
    const height = match ? 'unset' : '100vh';
    return (
        <>
            <div className="row" style={{ minHeight: height }}>
                <div
                    className="col-md-6 d-flex justify-content-center my-4 my-md-0"
                    style={{ backgroundImage: color }}
                >
                    <div className="row">
                        <div className="col-12 d-flex flex-column justify-content-center text-left text-md-center">
                            <Typography variant="h4" color={txt} gutterBottom>
                                Don't Panic!
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={txt}
                                gutterBottom
                            >
                                We will help you recover your <br />
                                password.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-6 d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: '#F4F5FB' }}
                >
                    <div
                        className="d-flex flex-column"
                        style={{ width: '275px' }}
                    >
                        <Form />
                        <div className="pt-4 pb-2 text-center">
                            <Typography
                                variant="caption"
                                color="primary"
                                gutterBottom
                            >
                                <Link
                                    to="#"
                                    variant="inherit"
                                    style={{ color: 'inherit' }}
                                >
                                    Need Assistance?
                                </Link>
                            </Typography>
                        </div>
                        <Button
                            variant="outlined"
                            className={`${classes.margin}`}
                            style={{ backgroundColor: '#fff' }}
                            component={Link}
                            to="#"
                        >
                            <Typography
                                variant="caption"
                                className={classes.margin}
                            >
                                Call Us
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
