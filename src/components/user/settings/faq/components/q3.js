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

export default function Q1() {
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
                            I Cannot find a doctor
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
                    	If you are unable to find a doctor on this platform, please go to the <b>Refer</b> section under the settings tab. Fill in the details asked and paste the link of the doctor's profile on the Practo <a href="https://www.practo.com/doctors">(www.prato.com)</a> platform
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}
