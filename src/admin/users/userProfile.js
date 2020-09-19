import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
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
import img from '../../svg/default.png'
import AdminTextField from '../components/AdminTextField.js';
import { createUser, getUser, deleteUser, isAuthenticatedAdmin } from '../../core/helperMethods.js';

const useStyles = makeStyles(theme => ({
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


const UserProfile = ({ match }) => {
    const classes = useStyles();
    const history = useHistory();
    const { user, token } = isAuthenticatedAdmin().data;
    console.log(user);

    console.log(match);
    const userId = match.params.id;
    const [user, setUser] = useState({
        name: 'q',
        _id: 'q',
        speciality: 'q',
        contact: 'q',
        rating: 'q',
        description: 'q',
        
    });
    const [photo, setPhoto] = useState(null);
    

    const handleChange = event => {
        
        const value = event.target.name === "photo" ? event.target.files[0] : event.target.value
        if(event.target.name === "photo") {
            readURL(event.target)
        }

        setUser({
            ...user,
            [event.target.name]: value
        });
    };

    const deleteDoc = e => {

        deleteUser(userId, user._id, token, () => {
            history.push(`/admin/users`)
        })
    }

    useEffect(() => {

        if(userId) {
            getUser(userId, data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                    setUser(data);
                }
            });

            setPhoto(`${process.env.REACT_APP_API}/user/photo/${userId}`)
        }

    }, [])

    const onSubmit = e => {
        e.preventDefault();
        console.log("in submit");
        
        if(!userId) {
            let formData = new FormData(e.target);
            let data = JSON.stringify(Object.fromEntries(formData));
            console.log(data);

            formData.delete('_id');
            formData.delete('rating');
            
            console.log(Object.fromEntries(formData))


            createUser(user._id, token, formData, data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                   // history.replace('/admin/user/update/')
                    setUser(data);
                }
            });
        }
    }

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function(e) {
                setPhoto(e.target.result)
            };

            reader.readAsDataURL(input.files[0]);
        }
    }


    return (

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
                                                    alt="User photo"
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
                                                            value={user.name}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} style={{display:userId?'block':'none'}}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Id"
                                                            name="_id"
                                                            required
                                                            value={user._id}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                            disabled
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Speciality"
                                                            name="speciality"
                                                            required
                                                            value={user.speciality}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Contact"
                                                            name="contact"
                                                            required
                                                            value={user.contact}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item md={6} xs={12} style={{display:userId?'block':'none'}}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Rating"
                                                            name="rating"
                                                            required
                                                            value={user.rating}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <input
                                                        type="hidden"
                                                        name="approvedBy"
                                                        className="form-control my-3"
                                                        value={user._id}
                                                    />
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
                                                    <Grid item xs={12}>
                                                        <AdminTextField
                                                            fullWidth
                                                            label="Description"
                                                            name="description"
                                                            required
                                                            value={user.description}
                                                            onChange={(e)=>handleChange(e)}
                                                            variant="outlined"
                                                        />
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
                                                    onClick={userId ? deleteDoc : () => history.push('/admin/user/all')}
                                                    
                                                >
                                                    {userId ? 'Delete' : 'Cancel'}
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    type="submit"
                                                >
                                                    Save
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
        
    );
};

export default UserProfile;
