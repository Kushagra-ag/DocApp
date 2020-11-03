import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Privacy from '../components/user/settings/privacy.js';
import Refer from '../components/user/settings/refer/refer.js';
import Faq from '../components/user/settings/faq/faq.js';
import About from '../components/user/settings/about.js';
import Contact from './contact.js';
import importedStyles from '../styles/styles.js';

export default function Settings({ profile }) {
    const classes = importedStyles();

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
