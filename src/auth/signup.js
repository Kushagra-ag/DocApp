import React from "react";
import { Button, Typography, FilledInput, useMediaQuery } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CustomTextField from "../components/CustomTextField.js";

const useStyles = makeStyles(theme => ({
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "spaceAround",
        backgroundColor: "#fff",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: "10px",
    },
    margin: {
        margin: theme.spacing(1),
        textTransform: "capitalize",
    },
    facebook: {
        color: "#fff",
        backgroundImage: "linear-gradient(to bottom, #5F7EBE, #3B5998)",
    },
    phone: {
        color: "#5F82E2",
        border: "1px solid #5F82E2",
        backgroundColor: "#fff",
    },
}));

function Form() {
    const classes = useStyles();
    return (
        <form className={classes.form} method="POST">
            <Typography variant="h6" className={classes.margin} gutterBottom>
                Register
            </Typography>
            <CustomTextField
                id="name"
                label="name"
                className={classes.margin}
                disableUnderline
                placeholder="Full Name"
                required
            />
            <CustomTextField
                id="phone"
                label="phone"
                className={classes.margin}
                disableUnderline
                placeholder="Phone number"
                required
            />
            <CustomTextField
                id="pass"
                label="password"
                type="password"
                className={classes.margin}
                disableUnderline
                color="primary"
                placeholder="Password"
                required
            />
            <Button
                variant="contained"
                className={`${classes.margin} ${classes.facebook}`}
                type="submit">
                <Typography variant="caption" className={classes.margin}>
                    Sign Up
                </Typography>
            </Button>
            <div className="py-2 text-center">
                <Typography
                    variant="caption"
                    color="primary"
                    component={Link}
                    to="/auth/forgot"
                    gutterBottom>
                    Forgot Password?
                </Typography>
            </div>
        </form>
    );
}

export default function Signup() {
    const classes = useStyles();
    const match = useMediaQuery("(max-width:767px)") ? true : false;
    const color = match
        ? "linear-gradient(225deg, rgba(74, 107, 197,0), rgba(95, 130, 226,0))"
        : "linear-gradient(225deg, rgb(74, 107, 197), rgb(95, 130, 226))";
    const txt = match ? "textPrimary" : "textSecondary";
    const height = match ? "unset" : "100vh";
    return (
        <>
            <div className="row" style={{ minHeight: height }}>
                <div
                    className="col-md-6 d-flex justify-content-center my-4 my-md-0"
                    style={{ backgroundImage: color }}>
                    <div className="row">
                        <div className="col-12 d-flex flex-column justify-content-center text-left text-md-center">
                            <Typography variant="h4" color={txt} gutterBottom>
                                Welcome!
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={txt}
                                gutterBottom>
                                Let's create your account
                            </Typography>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-6 d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: "#F4F5FB" }}>
                    <div
                        className="d-flex flex-column"
                        style={{ width: "275px" }}>
                        <Form />
                        <div className="pt-4 pb-2 text-center">
                            <Typography
                                variant="caption"
                                color="primary"
                                gutterBottom>
                                <Link
                                    to="/auth/login"
                                    variant="inherit"
                                    style={{ color: "inherit" }}>
                                    Already have an account?
                                </Link>
                            </Typography>
                        </div>
                        <Button
                            variant="outlined"
                            className={`${classes.margin}`}
                            style={{ backgroundColor: "#fff" }}
                            component={Link}
                            to="/auth/login">
                            <Typography
                                variant="caption"
                                className={classes.margin}>
                                Sign In now
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
