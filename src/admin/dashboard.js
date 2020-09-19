import React, { useState } from 'react';
import clsx from 'clsx';
// import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import axios from 'axios';
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

const data = [
    {
        id: uuid(),
        ref: 'CDD1049',
        amount: 30.5,
        customer: {
            name: 'Ekaterina Tankova'
        },
        createdAt: 1555016400000,
        status: 'pending'
    },
    {
        id: uuid(),
        ref: 'CDD1048',
        amount: 25.1,
        customer: {
            name: 'Cao Yu'
        },
        createdAt: 1555016400000,
        status: 'delivered'
    },
    {
        id: uuid(),
        ref: 'CDD1047',
        amount: 10.99,
        customer: {
            name: 'Alexa Richardson'
        },
        createdAt: 1554930000000,
        status: 'refunded'
    },
    {
        id: uuid(),
        ref: 'CDD1046',
        amount: 96.43,
        customer: {
            name: 'Anje Keizer'
        },
        createdAt: 1554757200000,
        status: 'pending'
    },
    {
        id: uuid(),
        ref: 'CDD1045',
        amount: 32.54,
        customer: {
            name: 'Clarke Gillebert'
        },
        createdAt: 1554670800000,
        status: 'delivered'
    },
    {
        id: uuid(),
        ref: 'CDD1044',
        amount: 16.76,
        customer: {
            name: 'Adam Denisov'
        },
        createdAt: 1554670800000,
        status: 'delivered'
    }
];

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

const DashboardLayout = () => {
    const classes = useStyles();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [orders] = useState(data);

    return (

            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={`${classes.content} row`}>
                        <Card
                            className={`${clsx(
                                classes.root
                            )} col-lg-10 mt-5 mx-3 d-flex flex-column`}
                        >
                            <CardHeader title="Pending Requests" />
                            <Divider />
                            <CardContent>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Speciality</TableCell>
                                            <TableCell sortDirection="desc">
                                                <Tooltip
                                                    enterDelay={300}
                                                    title="Sort"
                                                >
                                                    <TableSortLabel
                                                        active
                                                        direction="desc"
                                                    >
                                                        Date
                                                    </TableSortLabel>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders.map(order => (
                                            <TableRow hover key={order.id}>
                                                <TableCell>
                                                    {order.ref}
                                                </TableCell>
                                                <TableCell>
                                                    {order.customer.name}
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        //moment(order.createdAt).format('DD/MM/YYYY')
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        color="primary"
                                                        label={order.status}
                                                        size="small"
                                                    />
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
};

export default DashboardLayout;
