import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Contact from '../user/contact.js';
import justin from '../svg/justin.png';
import ryan from '../svg/ryan.png';
import lara from '../svg/lara.png';
import doc1 from '../svg/doc1.jpg';
import ExperienceIcon from '../components/ExperienceIcon.js';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import DoctorProfileIcons from '../components/doctor/DoctorProfileIcons.js';
import { isAuthenticated, addToFav, readFav } from '../core/helperMethods.js';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        textTransform: 'capitalize'
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    avatarGroup: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    }
}));

export default function Profile({ match }) {
    const classes = useStyles();
    const [favourite, setFavourite] = useState(false);
    const [profile, setProfile] = useState({});
    const [photo, setPhoto] = useState();
    const { user, token} = isAuthenticated().data;

    useEffect(() => {
        const doctorId = match.params.id;
        setPhoto(`${process.env.REACT_APP_API}/doctor/photo/${doctorId}`);

        axios
            .get(`${process.env.REACT_APP_API}/doctor/${doctorId}`)
            .then(res => {
                setProfile(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        // Getting favourite doctor list

        readFav(user._id, token, function(res) {

            let fav=0;
            res.data.forEach(doc => {
                if(doc===doctorId && !fav) {
                    console.log("matched")
                    fav=1;
                    
                }
            })
            setFavourite(fav ? true : false)
        })
        
    }, []);

    const handleFav = () => {

        if(!favourite) {

            const data = {
                favourite: match.params.id
            }

            addToFav(user._id, token, data, function(){
                setFavourite(true)
            })

        } else {


        }
    }

    const txt = useMediaQuery('(max-width:767px)')
        ? 'textSecondary'
        : 'primary';

    return (
        <>
            <div className="col-xl-8 pl-md-5">
                <div className="row pt-4 docProfile">
                    <div className="col-md-4 d-flex justify-content-center">
                        <Avatar
                            src={photo}
                            className={classes.avatar}
                            variant="rounded"
                            alt="doctor"
                        />
                    </div>
                    <div className="col-md-8 mt-3 mt-md-0 mb-n4 mb-md-n0 d-flex flex-column align-items-center align-items-md-start">
                        <Typography variant="h4" color={txt} gutterBottom>
                            {profile.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color={txt}
                            gutterBottom
                        >
                            {profile.speciality}
                        </Typography>
                        <DoctorProfileIcons
                            contact={profile.contact}
                            id={profile._id}
                        />
                    </div>
                </div>
                <div className="row my-5 my-md-4">
                    <div className="col-md-4 text-center text-md-left">
                        <Card
                            className="d-inline-block"
                            component={Link}
                            to="/doctor/reviews"
                        >
                            <CardContent
                                className="d-flex justify-content-around align-items-center"
                                style={{ padding: '5px' }}
                            >
                                <AvatarGroup max={3}>
                                    <Avatar
                                        src={justin}
                                        className={classes.avatarGroup}
                                        variant="rounded"
                                        alt="friends"
                                    />
                                    <Avatar
                                        src={ryan}
                                        className={classes.avatarGroup}
                                        variant="rounded"
                                        alt="friends"
                                    />
                                    <Avatar
                                        src={lara}
                                        className={classes.avatarGroup}
                                        variant="rounded"
                                        alt="friends"
                                    />
                                </AvatarGroup>

                                <Typography
                                    className="pl-3"
                                    variant="subtitle2"
                                    color="primary"
                                >
                                    7 of your friends refer this doctor
                                </Typography>

                                <IconButton
                                    className={classes.margin}
                                    color="primary"
                                    aria-label="call"
                                    component="span"
                                    size="medium"
                                    edge="start"
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                        <br />
                        <Card
                            className="my-4 d-inline-block d-md-block"
                            style={{
                                backgroundColor: '#5F82E2',
                                width: '370px',
                                maxWidth: '100%'
                            }}
                            component={Link}
                            to="/doctor/reviews"
                        >
                            <CardContent
                                className="d-flex justify-content-around align-items-center"
                                style={{ padding: '16px' }}
                            >
                                <IconButton
                                    aria-label="rating"
                                    component="span"
                                    style={{
                                        color: '#fff',
                                        border: '3px solid #3654A8'
                                    }}
                                >
                                    <StarRoundedIcon fontSize="large" />
                                </IconButton>

                                <div
                                    className="d-flex justify-content-around align-items-left flex-column"
                                    style={{ color: '#fff' }}
                                >
                                    <Typography variant="h6">
                                        {profile.rating}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        1800 reviews
                                    </Typography>
                                </div>

                                <IconButton
                                    aria-label="right"
                                    component="span"
                                    style={{ color: '#fff' }}
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-8">
                        <Card className="p-3">
                            <CardContent className="text-center text-md-left p-1">
                                <Typography
                                    variant="h5"
                                    display="block"
                                    gutterBottom
                                >
                                    About Dr. {profile.name}
                                </Typography>
                                <Typography
                                    display="block"
                                    variant="body1"
                                    style={{ opacity: '0.5' }}
                                    gutterBottom
                                >
                                    {profile.description}
                                </Typography>
                                <div className="d-flex mt-3">
                                    <ExperienceIcon
                                        type="experience"
                                        number="25"
                                    />
                                    <ExperienceIcon
                                        type="recognition"
                                        number="10"
                                    />
                                    <div
                                        className="ml-auto"
                                        onClick={handleFav}
                                    >
                                        <IconButton
                                            className={classes.margin}
                                            color={
                                                favourite
                                                    ? 'primary'
                                                    : 'default'
                                            }
                                            aria-label="favourite"
                                            component="span"
                                            size="medium"
                                        >
                                            <FavoriteRoundedIcon fontSize="large" />
                                        </IconButton>
                                        <Typography
                                            variant="subtitle2"
                                            align="center"
                                        >
                                            {favourite ? 'Remove from' : 'Add to'} <br />
                                            favourites
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="p-3 my-4" elevation={2}>
                            <CardContent className="text-center text-md-left p-1">
                                <Typography
                                    variant="h5"
                                    display="block"
                                    gutterBottom
                                >
                                    Expertise
                                </Typography>
                                <Typography
                                    display="block"
                                    variant="body1"
                                    style={{ opacity: '0.5' }}
                                >
                                    Quis autem vel eum iure reprehenderit qui in
                                    ea voluptate velit esse quam nihil molestiae
                                    consequatur, vel illum qui dolorem eum
                                    fugiat quo voluptas nulla pariatur
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}
