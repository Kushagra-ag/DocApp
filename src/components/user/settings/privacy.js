import React, { useState } from 'react';
import {
    Typography,
    IconButton,
    Card,
    CardContent,
    CardActions,
    Collapse
} from '@material-ui/core';
import clsx from 'clsx';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import AntSwitch from '../../AntSwitch.js';
import importedStyles from '../../../styles/styles.js';

export default function Privacy() {
    const classes = importedStyles();
    const [state, setState] = useState({
        checkedA: false,
        checkedB: true,
        checkedC: true
    });
    const [privacy, setPrivacy] = useState(true);

    const handleExpandClick = () => {
        setPrivacy(!privacy);
    };

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Card className="my-3 text-left">
                <div className="d-flex justify-content-between">
                    <CardContent className="d-flex justify-content-around align-items-center">
                        <Typography variant="h6" color="primary">
                            Privacy
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: privacy
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={privacy}
                            aria-label="show more"
                        >
                            <ChevronRightRoundedIcon />
                        </IconButton>
                    </CardActions>
                </div>
                <div className="row">
                    <Collapse
                        className="col-12"
                        in={privacy}
                        timeout="auto"
                        unmountOnExit
                    >
                        <CardContent>
                            <div className="d-flex justify-content-between">
                                <Typography paragraph color="textPrimary">
                                    Show my Reviews to My Contacts Only
                                </Typography>
                                <AntSwitch
                                    checked={state.checkedA}
                                    onChange={handleChange}
                                    name="checkedA"
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <Typography paragraph color="textPrimary">
                                    Hide my contacts
                                </Typography>
                                <AntSwitch
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <Typography paragraph color="textPrimary">
                                    Hide my favourites
                                </Typography>
                                <AntSwitch
                                    checked={state.checkedC}
                                    onChange={handleChange}
                                    name="checkedC"
                                />
                            </div>
                        </CardContent>
                    </Collapse>
                </div>
            </Card>
        </>
    );
}
