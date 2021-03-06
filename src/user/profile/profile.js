import React, { useState, useLayoutEffect } from 'react';
import { Button, Typography, useMediaQuery, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import UserProfileIcons from '../../components/user/UserProfileIcons.js';
import Reviews from './reviews';
import Contacts from './contacts';
import Favourites from './favourites';
import photo from '../../svg/default.png';
import Contact from '../contact.js';
import { isAuthenticated } from '../../core/helperMethods.js';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 500
    },
    flex: {
        display: 'flex',
        justifyCcontent: 'center',
        alignItems: 'center'
    },
    margin: {
        margin: theme.spacing(1),
        textTransform: 'capitalize'
    },
    avatar: {
        width: theme.spacing(24),
        height: theme.spacing(20)
    }
}));

export default function Profile({ profile }) {
    const classes = useStyles();
    const history = useHistory();
    const [user, setUser] = useState(profile);

    const txt = useMediaQuery('(max-width:767px)')
        ? 'textSecondary'
        : 'primary';

    useLayoutEffect(() => {
        console.log(profile)
    //     isAuthenticated()
    //         .then(profile => {
    //             if(profile.data) {
    //                 setUser(profile.data.user)
    //             } else {
    //                 history.push('/auth/login')
    //             }
    //         })

    }, []);

    return user ? (
        <>
            <div className="col-md-10 col-xl-8 pl-md-5">
                <div className="row pt-4 docProfile">
                    <div className="col-md-4 d-flex justify-content-center">
                        <Avatar
                            src={photo}
                            className={classes.avatar}
                            style={{ objectFit: 'contain' }}
                            alt="doctor"
                            variant="rounded"
                        />
                    </div>
                    <div className="col-md-8 mt-3 mt-md-0 mb-n4 mb-md-n0 d-flex flex-column align-items-center align-items-md-start">
                        <Typography
                            className="text-capitalize"
                            variant="h4"
                            color={txt}
                            gutterBottom
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            className="mt-n2"
                            variant="subtitle1"
                            color={txt}
                            gutterBottom
                        >
                            {user.age ? `${user.age} years, ` : ''}Orissa
                        </Typography>
                        <UserProfileIcons />
                    </div>
                </div>
                <div className="row my-5 my-md-4 justify-content-center justify-content-md-start">
                    <Switch>
                        <Route
                            exact
                            path="/user/profile"
                            render={() => (
                                <Redirect to="/user/profile/reviews" profile={profile} />
                            )}
                        />
                        <Route
                            path="/user/profile/reviews"
                            render={props => (<Reviews {...props} profile={profile} />)}
                        />
                        <Route
                            path="/user/profile/contacts"
                            render={props => (<Contacts {...props} profile={profile} />)}
                        />
                        <Route
                            path="/user/profile/favourites"
                            render={props => (<Favourites {...props} profile={profile} />)}
                        />
                    </Switch>
                </div>
            </div>
            <Contact />
        </>
    ) : null
}
