import React from 'react';
import {
    Typography,
    IconButton,
    Card,
    CardContent,
    CardActions
} from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import InfoIcon from '@material-ui/icons/Info';

export default function About(props) {
    return (
        <>
            <Card className="my-3 text-left">
                <div className="d-flex justify-content-between">
                    <CardContent className="d-flex justify-content-around align-items-center">
                        <IconButton className="pl-0 pr-2 py-0" color="primary">
                            <InfoIcon />
                        </IconButton>
                        <Typography variant="h6" color="primary">
                            About Us
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <ChevronRightRoundedIcon />
                        </IconButton>
                    </CardActions>
                </div>
            </Card>
        </>
    );
}
