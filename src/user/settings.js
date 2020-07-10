import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Privacy from '../components/user/settings/privacy.js';
import Refer from '../components/user/settings/refer/refer.js';
import Faq from '../components/user/settings/faq/faq.js';
import About from '../components/user/settings/about.js';
import Contact from './contact.js';

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

export default function Settings() {
    const classes = useStyles();

    return (
        <>
            <div className="col-md-8 pl-md-5 overflow-hidden settings">
                <div className="row pt-4">
                    <div className="col-sm-9 col-xl-6 text-center">
                        <Privacy />
                        <Refer />
                        <Faq />
                        <About />

                        <Button
                            variant="contained"
                            className={`${classes.margin} ${classes.blueBtn}`}
                            component={Link}
                            to="#"
                        >
                            <Typography
                                variant="caption"
                                className={classes.margin}
                            >
                                Contact Us
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}
