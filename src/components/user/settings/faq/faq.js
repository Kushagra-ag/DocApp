import React from 'react';
import { Link } from 'react-router-dom';
import {
    Typography,
    IconButton,
    Card,
    CardContent,
    CardActions
} from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import LiveHelpRoundedIcon from '@material-ui/icons/LiveHelpRounded';

export default function Faq(props) {
    return (
        <>
            <Link to="/user/faq">
            <Card className="my-3 text-left">
                <div className="d-flex justify-content-between">
                    <CardContent className="d-flex justify-content-around align-items-center">
                        <IconButton className="pl-0 pr-2 py-0" color="primary">
                            <LiveHelpRoundedIcon />
                        </IconButton>
                        <Typography variant="h6" color="primary">
                            FAQ
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <ChevronRightRoundedIcon />
                        </IconButton>
                    </CardActions>
                </div>
            </Card>
            </Link>
        </>
    );
}