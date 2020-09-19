import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {

  withStyles,
} from '@material-ui/core/styles';
import {
    Box,
    Button,
    Card,
    CardHeader,
    CardContent,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
    makeStyles,
    Container,
    Grid,
    Avatar,
    TextField,
    CardActions,
    Typography
} from '@material-ui/core';
import img from '../../svg/default.png'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getDoctor, deleteDoctor, isAuthenticatedAdmin } from '../../core/helperMethods.js';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256
        }
    },
    contentContainer: {
        flex: '1 1 auto'
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto'
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));

const AdminTextField = withStyles({

    root: {
        '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4a6bc5',
      },
    },
    "& label": {
    color: "#4a6bc5"
}
},

})(TextField)


const DoctorProfile = ({ match }) => {
    const classes = useStyles();
    const history = useHistory();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [orders] = useState(null);
    const [doctor, setDoctor] = useState({
        name:'Loading',
        _id: 'Loading',
        speciality: 'Loading',
        contact: 'Loading',
        rating: 'Loading'
    });
    const [photo, setPhoto] = useState();
    const { user, token } = isAuthenticatedAdmin().data;
    console.log(user);

    const doctorId = match.params.id;

    console.log(match);

    const handleChange = event => {
        setDoctor({
            ...doctor,
            [event.target.name]: event.target.value
        });
    };

    const deleteDoc = e => {

        deleteDoctor(doctorId, user._id, token, () => {
            history.push(`/admin/doctors`)
        })
    }

    useEffect(() => {

        if(request) {
            getDoctor(doctorId, data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                    setDoctor(data);
                }
            });
        }

        setPhoto(`${process.env.REACT_APP_API}/doctor/photo/${doctorId}`)
    }, []);

    return (
        <div className={classes.root}>
            <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />

            <NavBar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />

            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={`${classes.content} row`}>
                        <Container
                            className={`${clsx(
                                classes.root
                            )} col-lg-10 mt-5 mx-3`}
                            maxWidth="lg"
                        >
                            <Grid container spacing={3}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Card>
                                        <CardContent>
                                            <Box
                                                alignItems="center"
                                                display="flex"
                                                flexDirection="column"
                                            >
                                                <img
                                                    className='w-100 mb-3'
                                                    src={photo || img}
                                                    alt="Doctor photo"
                                                />
                                                
                                                
                                                <Typography
                                                    className={classes.dateText}
                                                    color="textSecondary"
                                                    variant="body1"
                                                >
                                                    {
                                                        // `${moment().format('hh:mm A')} ${user.timezone}`
                                                    }
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <Divider />
                                        <CardActions>
                                            <Button
                                                color="primary"
                                                fullWidth
                                                variant="text"
                                            >
                                                Change picture
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item lg={8} md={6} xs={12}>
                                    <form autoComplete="off" noValidate>
                                        <Card>
                                            <CardHeader
                                                subheader="The information can be edited"
                                                title="Profile"
                                            />
                                            <Divider />
                                            <CardContent>
                                                <Grid container spacing={3}>
                                                    
                                                    <Grid item xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Name"
                                                            name="name"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                            value={
                                                                doctor.name
                                                            }
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Id"
                                                            name="id"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                            value={
                                                                doctor._id
                                                            }
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Speciality"
                                                            name="speciality"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                            value={doctor.speciality}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Contact"
                                                            name="contact"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                            value={doctor.contact}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Rating"
                                                            name="rating"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                            value={
                                                                doctor.rating
                                                            }
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        {
                                                            // <AdminTextField
                                                            //                                                         fullWidth
                                                            //                                                         label="Select State"
                                                            //                                                         name="state"
                                                            //                                                         onChange={
                                                            //                                                             handleChange
                                                            //                                                         }
                                                            //                                                         required
                                                            //                                                         select
                                                            //                                                         SelectProps={{
                                                            //                                                             native: true
                                                            //                                                         }}
                                                            //                                                         value={''}
                                                            //                                                         variant="outlined"
                                                            //                                                     >
                                                                                                                    
                                                            //                                                     </AdminTextField>
                                                                                                            }
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Divider />
                                            <Box
                                                display="flex"
                                                justifyContent="space-between"
                                                p={2}
                                            >
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    onClick={deleteDoc}
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    Save details
                                                </Button>
                                            </Box>
                                        </Card>
                                    </form>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
