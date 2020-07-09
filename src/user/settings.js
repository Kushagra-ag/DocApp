import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Privacy from '../components/settings/privacy.js';
import Refer from '../components/settings/refer.js';
import Faq from '../components/settings/faq.js';
import About from '../components/settings/about.js';
import SettingsBanner from '../svg/settings.svg';
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
    const [privacy, setPrivacy] = React.useState(true);

    const handleExpandClick = el => {
        if (el === 'privacy') setPrivacy(!privacy);
    };

    return (
        <>
            <div className="col-md-8 pl-md-5 overflow-hidden settings">
                <div className="row pt-4">
                    <div className="col-sm-9 col-md-6 text-center">
                        <Privacy
                            expanded={privacy}
                            click={() => handleExpandClick('privacy')}
                        />
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
