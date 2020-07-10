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

export default function Privacy(props) {
    return (
        <Link to="/user/refer">
            <Card className="my-3 text-left">
                <div className="d-flex justify-content-between">
                    <CardContent className="d-flex justify-content-around align-items-center">
                        <Typography variant="h6" color="primary">
                            Refer a Doctor
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
    );
}