import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { getUsers, isAuthenticatedAdmin } from '../../core/helperMethods.js';
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

export default function AllUsers() {
    const classes = useStyles();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const { user, token } = isAuthenticatedAdmin();

    // const editRecord = e => {
    //     const userId = e.currentTarget.firstElementChild.innerHTML;
    //     console.log(userId);

    //     history.push(`/admin/user/${userId}`);
    // };

    useEffect(() => {
        getUsers(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                setUsers(data);
            }
        });
    }, []);

    return (

            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={`${classes.content} row`}>
                        <Card
                            className={`${clsx(
                                classes.root
                            )} col-lg-10 mt-5 mx-3 d-flex flex-column`}
                        >
                            <CardHeader title={`User List - Total ${users.length}`} />
                            <Divider />
                            <CardContent>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="d-none">
                                                Id
                                            </TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
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

                                            <TableCell>Contact</TableCell>
                                            <TableCell >Role</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users.map(user => (
                                            <TableRow
                                                hover
                                                key={user._id}
                                            >
                                                <TableCell className="d-none">
                                                    {user._id}
                                                </TableCell>
                                                <TableCell>
                                                    {user.name}
                                                </TableCell>
                                                <TableCell>
                                                    {user.email}
                                                </TableCell>
                                                <TableCell>
                                                    {user.mobile}
                                                </TableCell>
                                                <TableCell>
                                                    {user.role}
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
        
    );
}
