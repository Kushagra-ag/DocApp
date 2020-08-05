import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const useStyles = makeStyles(theme => ({
    root: {
        wordBreak: 'break-all',
        cursor: 'pointer'
    },
    imgContainer: {
        borderRadius: 10,

        overflow: 'hidden'
    }
}));

export default function DoctorTile(props) {
    const classes = useStyles();
    const history = useHistory();
    const [profile, setProfile] = useState({});

    const onClick = e => {
        const id = e.currentTarget.dataset.key;
        history.push(`/doctor/profile/${id}`)
    }

    return (
        
            <Card
                className={`mx-2 px-2 px-sm-0 d-flex flex-column flex-sm-row ${classes.root}`}
                data-key={props.id}
                onClick={onClick}
            >
                <div className={`mx-n2 mx-sm-0 ${classes.imgContainer}`}>
                    <img src={props.img} style={{height:'170px'}} alt="doctor image" />
                </div>
                <div className="mt-2 mx-sm-3">
                    <Typography className="font-weight-bold" variant="body1">
                        {props.name}
                    </Typography>
                    <Typography className="text-black-50" variant="caption">
                        {props.speciality}
                    </Typography>
                    <div className="d-flex align-items-center mb-2">
                        <IconButton
                            className="colorYellow pb-1"
                            aria-label="review"
                            component="div"
                            size="small"
                        >
                            <StarRoundedIcon />
                        </IconButton>
                        <Typography
                            className="colorYellow mr-2 font-weight-bold"
                            variant="caption"
                        >
                            {props.rating}
                        </Typography>
                        <Typography
                            className="font-weight-bold homeReviewNo"
                            variant="caption"
                        >
                            {props.number}
                        </Typography>
                    </div>
                </div>
            </Card>
        
    );
}
