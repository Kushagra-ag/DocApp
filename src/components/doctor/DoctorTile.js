import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import img from '../../svg/default.png';

const useStyles = makeStyles(theme => ({
    root: {
        wordBreak: 'break-all',
        cursor: 'pointer'
    },
    imgContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        maxWidth: '150px'
    }
}));

export default function DoctorTile(props) {
    const classes = useStyles();
    const history = useHistory();
    const [profile, setProfile] = useState({});
    const [photo, setPhoto] = useState();

    const onClick = e => {
        const id = e.currentTarget.dataset.key;
        history.push(`/doctor/profile/${id}`);
    };

    useEffect(() => {
        setPhoto(`${process.env.REACT_APP_API}/doctor/photo/${props.id}`);
    }, []);

    return (
        <Card
            className={`mx-2 px-2 px-sm-0 d-flex flex-column flex-sm-row ${classes.root}`}
            data-key={props.id}
            onClick={onClick}
        >
            <div
                className={`mx-n2 mx-sm-0 text-center text-md-left ${classes.imgContainer}`}
            >
                <img
                    src={photo || img}
                    style={{ height: '170px' }}
                    alt="doctor image"
                />
            </div>
            <div className="mt-2 mx-sm-3">
                <Typography className="font-weight-bold text-truncate" style={{maxWidth:'170px'}} variant="body1" tooltip={props.name}>
                    {props.name}
                </Typography>
                <Typography className="text-black-50 text-truncate" style={{maxWidth:'170px'}} variant="caption" display="block">
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
