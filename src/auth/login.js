import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link, useHistory, Redirect } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField.js';
import DoctoIcon from '../components/DoctoIcon.js';
import { authenticated } from '../utilities.js';
import importedStyles from '../styles/styles.js';
import FacebookIcon from '@material-ui/icons/Facebook';

function Form() {
    const classes = importedStyles();
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
            .post(`${process.env.REACT_APP_API}/signin`, data, {
                headers: options
            })
            .then(data => {
                console.log(data);
                if (data.error) throw data.error;
                // const token = data.data.token;
                setLoading(false);
                authenticated(data, () => history.push('/user/dashboard'));

                // history.push('/user/home')
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setError('Invalid username or password');
            });
    };

    const spinner = <i className="fas fa-circle-notch fa-spin my-2"></i>;

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
                autoFocus
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
                className={`${classes.margin} ${classes.blueBtn}`}
                type="submit"
            >
                {loading ? (
                    spinner
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
    const classes = importedStyles();
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
                        <Button
                            variant="contained"
                            className={`${classes.margin} ${classes.blueBtn}`}
                            startIcon={<FacebookIcon />}
                            component={Link}
                            to="#"
                        >
                            <Typography
                                variant="caption"
                                className={classes.margin}
                            >
                                Continue with Facebook
                            </Typography>
                        </Button>
                        <div className="pt-2 pb-4 text-center">
                            <Typography
                                variant="caption"
                                color="primary"
                                gutterBottom
                            >
                                OR
                            </Typography>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    );
}
