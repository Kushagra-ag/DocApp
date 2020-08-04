import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link, useHistory } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField.js';
import importedStyles from '../styles/styles.js';

function Form() {
    const styles = importedStyles();
    const history = useHistory();
    const [error, setError] = useState('');

    const onSubmitForm = e => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let data = JSON.stringify(Object.fromEntries(formData));

        const options = {
            'content-type': 'application/json'
        };

        axios
            .post(`${process.env.API}/signup`, data, {
                headers: options
            })
            .then(data => {
                console.log(data);
                history.push('/auth/login');
            })
            .catch(err => {
                console.log(err);
                setError('Could not register account');
            });
    };
    return (
        <form className={styles.form} method="POST" onSubmit={onSubmitForm}>
            <Typography variant="h6" className={styles.margin} gutterBottom>
                Register
            </Typography>
            <CustomTextField
                id="name"
                label="name"
                name="name"
                className={styles.margin}
                disableUnderline
                placeholder="Full Name"
                required
            />
            <CustomTextField
                id="phone"
                label="phone"
                name="mobile"
                className={styles.margin}
                disableUnderline
                placeholder="Phone number"
                required
            />
            <CustomTextField
                id="email"
                label="email"
                name="email"
                className={styles.margin}
                disableUnderline
                placeholder="Email address"
                required
            />
            <CustomTextField
                id="pass"
                label="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={styles.margin}
                disableUnderline
                color="primary"
                placeholder="Password"
                required
            />
            <Button
                variant="contained"
                className={`${styles.margin} ${styles.blueBtn}`}
                type="submit"
            >
                <Typography variant="caption" className={styles.margin}>
                    Sign Up
                </Typography>
            </Button>
            <div className="py-2 text-center">
                <Typography
                    variant="caption"
                    color="primary"
                    component={Link}
                    to="/auth/forgot"
                    gutterBottom
                >
                    Forgot Password?
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

export default function Signup() {
    const styles = importedStyles();
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
                                Welcome!
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={txt}
                                gutterBottom
                            >
                                Let's create your account
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
                                    to="/auth/login"
                                    variant="inherit"
                                    style={{ color: 'inherit' }}
                                >
                                    Already have an account?
                                </Link>
                            </Typography>
                        </div>
                        <Button
                            variant="outlined"
                            className={`${styles.margin}`}
                            style={{ backgroundColor: '#fff' }}
                            component={Link}
                            to="/auth/login"
                        >
                            <Typography
                                variant="caption"
                                className={styles.margin}
                            >
                                Sign In now
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
