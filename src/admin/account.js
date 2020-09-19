import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import {
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
    Container,
    Grid,
    
    CardActions,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { createDoctor, isAuthenticatedAdmin } from '../core/helperMethods.js';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import img from '../svg/default.png'
import AdminTextField from './components/AdminTextField.js';

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


const DoctorProfile = (request) => {
    const classes = useStyles();
    const history = useHistory();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [admin, setAdmin] = useState({
        name: '',
        _id: '',
        mobile: '',
        email: '',
        role: '',        
    });
    const [photo, setPhoto] = useState(null);
    const formData = new FormData();
    const { user, token } = isAuthenticatedAdmin().data;
    console.log(user);

    const handleChange = event => {
        
        const value = event.target.name === "photo" ? event.target.files[0] : event.target.value
        if(event.target.name === "photo") {
            readURL(event.target)
        }

        setAdmin({
            ...admin,
            [event.target.name]: value
        });
    };

    useEffect(() => {

    	setAdmin(user)

    }, [])

    const onSubmit = e => {
    	e.preventDefault();
    	console.log("in submit");
        let formData = new FormData(e.target);
        let data = JSON.stringify(Object.fromEntries(formData));

    	
    	console.log(Object.fromEntries(formData))

    	// createDoctor(user._id, token, formData, data => {
     //        if (data.error) {
     //            console.log(data.error);
     //        } else {
     //            console.log(data);
     //           // history.replace('/admin/doctor/update/')
     //            setDoctor(data);
     //        }
     //    });
    }

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                setPhoto(e.target.result)
            };

            reader.readAsDataURL(input.files[0]);
        }
    }


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
                        <form onSubmit={onSubmit} encType="multipart/form-data">
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
                                                    className='mb-3' style={{maxHeight:'300px'}}
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
                                            
                                                <input type="file" accept="image/*" name="photo" className="userImg mx-auto" style={{width:'100px'}} onChange={(e)=>handleChange(e)} />
                                            
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item lg={8} md={6} xs={12}>
                                    
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
                                                            required
                                                            value={admin.name}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Id"
                                                            name="_id"
                                                            required
                                                            value={admin._id}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                            disabled
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Email"
                                                            name="email"
                                                            required
                                                            value={admin.email}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Contact"
                                                            name="mobile"
                                                            required
                                                            value={admin.mobile}
                                                            onChange={(e)=>handleChange(e)}
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
                                                    onClick={()=>history.push("/admin/dashboard")}
                                                    
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    type="submit"
                                                >
                                                    Save details
                                                </Button>
                                            </Box>
                                        </Card>
                                    
                                </Grid>
                            </Grid>
                            </form>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
