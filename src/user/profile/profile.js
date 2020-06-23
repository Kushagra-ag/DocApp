import React from "react";
import{ useMediaQuery, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch, Redirect } from "react-router-dom";
import UserProfileIcons from "../../components/user/UserProfileIcons.js";
import Reviews from './reviews';
import Contacts from './contacts';
import Favourites from './favourites';
import user1 from '../../svg/user1.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 500,
    },
    flex: {
        display: "flex",
        justifyCcontent: "center",
        alignItems: "center",
    },
    margin: {
        margin: theme.spacing(1),
        textTransform: "capitalize",
    },
    avatar: {
        width: theme.spacing(24),
        height: theme.spacing(20),
    },
}));

export default function Profile() {
    const classes = useStyles();
    const txt = useMediaQuery("(max-width:767px)")
        ? "textSecondary"
        : "primary";

    return (
        <>
            <div className="col-md-9 col-lg-10">
                <div className="row pt-4 docProfile">
                    <div className="col-md-4 d-flex justify-content-center">
                        
                        <Avatar src={user1} className={classes.avatar} alt="doctor" variant="rounded" />
                        
                    </div>
                    <div className="col-md-8 mt-3 mt-md-0 mb-n4 mb-md-n0 d-flex flex-column align-items-center align-items-md-start">
                        <Typography variant="h4" color={txt} gutterBottom>
                            Apoorva Sen
                        </Typography>
                        <Typography
                            className="mt-n2"
                            variant="subtitle1"
                            color={txt}
                            gutterBottom
                        >
                            22 years, Orissa
                        </Typography>
                        <UserProfileIcons />
                    </div>
                </div>
                <div className="row my-5 my-md-4 justify-content-center justify-content-md-start">
                        
                    <Switch>
				        <Route exact path="/user/profile" render={() => (<Redirect to="/user/profile/reviews" />)} />
				        <Route path="/user/profile/reviews" component={Reviews} />
				        <Route path="/user/profile/contacts" component={Contacts} />
				        <Route path="/user/profile/favourites" component={Favourites} />
				    </Switch>
                    {
                    // <Card
                    //         className="my-4 d-inline-block d-md-block"
                    //         style={{
                    //             backgroundColor: "#5F82E2",
                    //             width: "320px",
                    //             maxWidth: "100%",
                    //         }}
                    // >
                    //         <CardContent
                    //             className="d-flex justify-content-around align-items-center"
                    //             style={{ padding: "5px" }}
                    //         >
                    //             <Link to="#" className={classes.margin}>
                    //                 <IconButton
                    //                     aria-label="rating"
                    //                     component="span"
                    //                     style={{
                    //                         color: "#fff",
                    //                         border: "3px solid #3654A8",
                    //                     }}
                    //                 >
                    //                     <StarRoundedIcon fontSize="large" />
                    //                 </IconButton>
                    //             </Link>

                    //             <div
                    //                 className="d-flex justify-content-around align-items-left flex-column"
                    //                 style={{ color: "#fff" }}
                    //             >
                    //                 <Typography variant="h6">4.5</Typography>
                    //                 <Typography variant="subtitle2">
                    //                     1800 reviews
                    //                 </Typography>
                    //             </div>
                    //             <Link
                    //                 to="#"
                    //                 className={classes.margin}
                    //                 edge="start"
                    //             >
                    //                 <IconButton
                    //                     aria-label="call"
                    //                     component="span"
                    //                     style={{ color: "#fff" }}
                    //                 >
                    //                     <ChevronRightIcon />
                    //                 </IconButton>
                    //             </Link>
                    //         </CardContent>
                    // </Card>
                    
                    
                   	// <div className="col-md-8">
                    //                        <Card className="p-3">
                    //                            <CardContent className="text-center text-md-left p-1">
                    //                                <Typography
                    //                                    variant="h5"
                    //                                    display="block"
                    //                                    gutterBottom
                    //                                >
                    //                                    About Dr. Nirmala Reddy
                    //                                </Typography>
                    //                                <Typography
                    //                                    display="block"
                    //                                    variant="body1"
                    //                                    style={{ opacity: "0.5" }}
                    //                                >
                    //                                    Quis autem vel eum iure reprehenderit qui in
                    //                                    ea voluptate velit esse quam nihil molestiae
                    //                                    consequatur, vel illum qui dolorem eum
                    //                                    fugiat quo voluptas nulla pariatur
                    //                                </Typography>
                    //                                <div className="d-flex mt-3">
                    //                                    <ExperienceIcon
                    //                                        type="experience"
                    //                                        number="25"
                    //                                    />
                    //                                    <ExperienceIcon
                    //                                        type="recognition"
                    //                                        number="10"
                    //                                    />
                    //                                </div>
                    //                            </CardContent>
                    //                        </Card>
                    //                        <Card className="p-3 my-4" elevation={2}>
                    //                            <CardContent className="text-center text-md-left p-1">
                    //                                <Typography
                    //                                    variant="h5"
                    //                                    display="block"
                    //                                    gutterBottom
                    //                                >
                    //                                    Expertise
                    //                                </Typography>
                    //                                <Typography
                    //                                    display="block"
                    //                                    variant="body1"
                    //                                    style={{ opacity: "0.5" }}
                    //                                >
                    //                                    Quis autem vel eum iure reprehenderit qui in
                    //                                    ea voluptate velit esse quam nihil molestiae
                    //                                    consequatur, vel illum qui dolorem eum
                    //                                    fugiat quo voluptas nulla pariatur
                    //                                </Typography>
                    //                            </CardContent>
                    //                        </Card>
                    //                    </div>
                                   }
                </div>
            </div>
        </>
    );
}
