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

export default function Q1() {
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
                            How Docto. works
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
                        <b>Docto.</b> is a platform where you can find doctors
                        in every field. You can view the rating of any doctor
                        and give reviews about your experience which will help
                        the other users.
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}
