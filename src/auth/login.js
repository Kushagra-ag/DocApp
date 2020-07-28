import React, { useState } from 'react';
import axios from 'axios';
import { Button, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory, Redirect } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField.js';
import DoctoIcon from '../components/DoctoIcon.js';
import { setLocalStorage } from '../utilities.js';

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
    },
    facebook: {
        color: '#fff',
        backgroundImage: 'linear-gradient(to bottom, #5F7EBE, #3B5998)'
    },
    phone: {
        color: '#5F82E2',
        border: '1px solid #5F82E2',
        backgroundColor: '#fff'
    }
}));

function Form() {
    const classes = useStyles();
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmitForm = e => {
        e.preventDefault();
        setLoading(true);

        let formData = new FormData(e.target);

        let data = JSON.stringify(Object.fromEntries(formData));

        const options = {
            'content-type': 'application/json'
            // 'withCredentials': true,
            // 'credentials': 'include'
        };

        axios
            .post('http://157.245.105.212:3000/api/signin', data, {
                headers: options
            })
            .then(data => {
                console.log(data);
                if (data.error) throw data.error;
                // const token = data.data.token;
                setLoading(false);
                setLocalStorage(data, () => history.push('/user/home'));

                // history.push('/user/home')
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
                setError('Invalid username or password');
            })
            
    };

    const spin = <i className="fas fa-circle-notch fa-spin my-2"></i>;

    return (
        <form className={classes.form} onSubmit={onSubmitForm}>
            <Typography variant="h6" className={classes.margin} gutterBottom>
                Sign In
            </Typography>
            <CustomTextField
                id="phone"
                label="Phone Number"
                name="mobile"
                autoComplete="username"
                className={classes.margin}
                disableUnderline
                placeholder="Phone number"
                required
            />
            <CustomTextField
                id="pass"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={classes.margin}
                disableUnderline
                color="primary"
                placeholder="Password"
                required
            />
            <Button
                variant="contained"
                className={`${classes.margin} ${classes.facebook}`}
                type="submit"
            >
                {loading ? (
                    spin
                ) : (
                    <Typography variant="caption" className={classes.margin}>
                        Sign In
                    </Typography>
                )}
            </Button>
            <div className="py-2 text-center">
                <Typography variant="caption" color="primary" gutterBottom>
                    <Link
                        to="/auth/forgot"
                        variant="inherit"
                        style={{ color: 'inherit' }}
                    >
                        Forgot Password?
                    </Link>
                </Typography>
            </div>
            <div className="py-2 text-center">
                <Typography
                    className="error"
                    variant="caption"
                    color="error"
                    gutterBottom
                >
                    {error}
                </Typography>
            </div>
        </form>
    );
}

export default function Login() {
    const classes = useStyles();
    const color = useMediaQuery('(max-width:767px)')
        ? 'linear-gradient(225deg, rgba(74, 107, 197,0), rgba(95, 130, 226,0))'
        : 'linear-gradient(225deg, rgb(74, 107, 197), rgb(95, 130, 226))';

    return (
        <>
            <div className="row" style={{ minHeight: '100vh' }}>
                <div
                    className="col-md-6 d-flex justify-content-center"
                    style={{ backgroundImage: color, color: '#fff' }}
                >
                    <div className="row">
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                            <DoctoIcon />
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
                                    to="/auth/signup"
                                    variant="inherit"
                                    style={{ color: 'inherit' }}
                                >
                                    Don't have an account?
                                </Link>
                            </Typography>
                        </div>

                        <Button
                            variant="outlined"
                            className={`${classes.margin}`}
                            style={{ backgroundColor: '#fff' }}
                            component={Link}
                            to="/auth/signup"
                        >
                            <Typography
                                variant="caption"
                                className={classes.margin}
                            >
                                Sign Up now
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
