import React from 'react';
import {
    useMediaQuery,
    Button,
    Typography,
    TextareaAutosize
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
        padding: theme.spacing(2, 2),
        borderRadius: '10px'
    },
    margin: {
        margin: theme.spacing(1, 0),
        textTransform: 'capitalize'
    },
    textArea: {
        backgroundColor: '#e8e8e8',
        padding: '20px 12px',
        border: 'none'
    },
    blueBtn: {
        color: '#fff',
        backgroundImage: 'linear-gradient(to bottom, #5F7EBE, #3B5998)'
    }
}));

export default function Contact() {
    const classes = useStyles();
    return (
        <>
            <div className="d-none d-xl-block col-md-4 px-4">
                <form className={`mt-4 mx-5 bg-light ${classes.form}`}>
                    <Typography variant="h5" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Have a question?
                    </Typography>

                    <CustomTextField
                        id="name"
                        label="name"
                        className={classes.margin}
                        disableUnderline
                        placeholder="Full name"
                        required
                    />
                    <CustomTextField
                        id="email"
                        label="email"
                        className={classes.margin}
                        disableUnderline
                        placeholder="Email Address"
                        required
                    />
                    <CustomTextField
                        id="phone"
                        label="phone"
                        className={classes.margin}
                        disableUnderline
                        placeholder="Mobile number"
                        required
                    />
                    <TextareaAutosize
                        className={`${classes.textArea} ${classes.margin}`}
                        aria-label="query"
                        placeholder="Your query"
                        rowsMin={5}
                        rowsMax={10}
                    />
                    <Button
                        variant="contained"
                        className={`${classes.margin} ${classes.blueBtn}`}
                        type="submit"
                    >
                        <Typography
                            variant="caption"
                            className={classes.margin}
                        >
                            Submit
                        </Typography>
                    </Button>
                </form>
            </div>
        </>
    );
}
