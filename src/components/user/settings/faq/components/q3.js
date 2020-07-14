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
                            I cannot find a doctor
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
                        If you are unable to find a doctor on this platform,
                        please go to the <b>Refer</b> section under the settings
                        tab. Fill in the details asked and paste the link of the
                        doctor's profile on the Practo{' '}
                        <a href="https://www.practo.com/doctors">
                            (www.prato.com)
                        </a>{' '}
                        platform.
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}
