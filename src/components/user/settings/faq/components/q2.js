import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import importedStyles from '../../../../../styles/styles.js';

export default function Q2() {
    const styles = importedStyles();
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
                            className={clsx(styles.expand, {
                                [styles.expandOpen]: expand
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
