import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import user1 from '../../svg/user1.jpg';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: theme.spacing(3)
    },
    rating: {
        '&>span': {
            padding: '0px 6px'
        }
    },
    action: {
        borderTop: '1px solid #00000020'
    }
}));

export default function DoctorReview(props) {
    const classes = useStyles();
    const [like, setLike] = useState(props.value.liked);

    const handleLike = like => {
        setLike(!like);
    };

    return (
        <Card className="p-3 mb-4">
            <CardContent className="text-center text-md-left p-1">
                <div className="d-flex justify-content-start align-items-center">
                    <Avatar
                        src={user1}
                        className={classes.avatar}
                        variant="rounded"
                        alt="review"
                    />
                    <div>
                        <Typography variant="h6" display="block" align="left">
                            {props.value.name}
                        </Typography>

                        <div className={`text-center ${classes.rating}`}>
                            <IconButton
                                aria-label="rating"
                                component="span"
                                color={
                                    props.value.rating > 0
                                        ? 'primary'
                                        : 'default'
                                }
                                edge="start"
                                size="small"
                            >
                                <StarRoundedIcon />
                            </IconButton>
                            <IconButton
                                aria-label="rating"
                                component="span"
                                color={
                                    props.value.rating > 1
                                        ? 'primary'
                                        : 'default'
                                }
                                size="small"
                            >
                                <StarRoundedIcon />
                            </IconButton>
                            <IconButton
                                aria-label="rating"
                                component="span"
                                color={
                                    props.value.rating > 2
                                        ? 'primary'
                                        : 'default'
                                }
                                size="small"
                            >
                                <StarRoundedIcon />
                            </IconButton>
                            <IconButton
                                aria-label="rating"
                                component="span"
                                color={
                                    props.value.rating > 3
                                        ? 'primary'
                                        : 'default'
                                }
                                size="small"
                            >
                                <StarRoundedIcon />
                            </IconButton>
                            <IconButton
                                aria-label="rating"
                                component="span"
                                color={
                                    props.value.rating > 4
                                        ? 'primary'
                                        : 'default'
                                }
                                size="small"
                            >
                                <StarRoundedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <Typography
                        className="text-black-50"
                        variant="body1"
                        align="left"
                    >
                        {props.value.review}
                    </Typography>
                </div>
                <div
                    className={`d-flex justify-content-between align-items-center pt-1 ${classes.action}`}
                >
                    <div>
                        <IconButton
                            aria-label="like"
                            component="span"
                            color={like ? 'primary' : 'default'}
                            onClick={() => {
                                handleLike(like);
                            }}
                        >
                            <ThumbUpRoundedIcon />
                        </IconButton>
                    </div>
                    <div>
                        <Typography className="text-black-50" variant="caption">
                            {props.value.time} ago
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
