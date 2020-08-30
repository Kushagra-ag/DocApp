import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { getDoctors, isAuthenticatedAdmin } from '../../core/helperMethods.js';
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
    makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
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

export default function AllDoctors() {
    const classes = useStyles();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const history = useHistory();
    const { user, token } = isAuthenticatedAdmin();

    const editRecord = e => {
        const doctorId = e.currentTarget.firstElementChild.innerHTML;
        console.log(doctorId);

        history.push(`/admin/doctor/${doctorId}`);
    };

    useEffect(() => {
        getDoctors(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                setDoctors(data);
            }
        });
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
                        <Card
                            className={`${clsx(
                                classes.root
                            )} col-lg-10 mt-5 mx-3 d-flex flex-column`}
                        >
                            <CardHeader title="Doctor List" />
                            <Divider />
                            <CardContent>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="d-none">
                                                Id
                                            </TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Speciality</TableCell>
                                            {
                                                // <TableCell sortDirection="desc">
                                                //                                             <Tooltip
                                                //                                                 enterDelay={300}
                                                //                                                 title="Sort"
                                                //                                             >
                                                //                                                 <TableSortLabel
                                                //                                                     active
                                                //                                                     direction="desc"
                                                //                                                 >
                                                //                                                     Date
                                                //                                                 </TableSortLabel>
                                                //                                             </Tooltip></TableCell>
                                            }

                                            <TableCell>Rating</TableCell>
                                            <TableCell>Contact</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {doctors.map(doctor => (
                                            <TableRow
                                                hover
                                                key={doctor._id}
                                                onClick={editRecord}
                                            >
                                                <TableCell className="d-none">
                                                    {doctor._id}
                                                </TableCell>
                                                <TableCell>
                                                    {doctor.name}
                                                </TableCell>
                                                <TableCell>
                                                    {doctor.speciality}
                                                </TableCell>
                                                <TableCell>
                                                    {doctor.rating}
                                                </TableCell>
                                                <TableCell>
                                                    {doctor.contact}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <Box display="flex" justifyContent="flex-end" p={2}>
                                <Button
                                    color="primary"
                                    endIcon={<ArrowRightIcon />}
                                    size="small"
                                    variant="text"
                                >
                                    View all
                                </Button>
                            </Box>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
