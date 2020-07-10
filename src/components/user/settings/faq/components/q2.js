import React, { useState } from 'react';
import {
    Typography,
    IconButton,
    Card,
    CardContent,
    CardActions,
    Collapse
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(90deg)'
    }
}));

export default function Q2() {
    const classes = useStyles();
    const [expand, setExpand] = useState(false);

    const handleExpandClick = () => {
        setExpand(!expand);
    };

    return (
        <>
            <Card className="my-3 text-left">
                <div className="d-flex justify-content-between">
                    <CardContent className="d-flex justify-content-around align-items-center">
                        <Typography variant="h6" color="primary">
                            How do I save a profile for viewing later
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expand
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expand}
                            aria-label="show more"
                        >
                            <ChevronRightRoundedIcon />
                        </IconButton>
                    </CardActions>
                </div>
                <Collapse in={expand} timeout="auto" unmountOnExit>
                    <CardContent>
                        You can create a list of your favourite physicians and
                        access them any time under the Favourites tab of your
                        profile.
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}
