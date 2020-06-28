import React, { useState } from "react";
import {
    Typography,
    IconButton,
    Card,
    CardContent,
    Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AntSwitch from "../AntSwitch.js";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import doc1 from "../../svg/doc1.jpg";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(24),
        height: theme.spacing(20),
    },
    rating: {
        "&>span": {
            padding: "10px 6px",
        },
    },
}));

export default function UserReviews(props) {
    const classes = useStyles();
    const [state, setState] = useState(true);

    const handleChange = (event) => {
        setState(event.target.checked);
    };

    return (
        <Card className="p-3 mb-4">
            <CardContent className="text-center text-md-left p-1">
                <Typography variant="h5" display="block" gutterBottom>
                    You reviewed {props.values.name}
                </Typography>
                <Avatar
                    src={doc1}
                    variant="rounded"
                    className={`my-3 mx-auto ${classes.avatar}`}
                    alt="doctor"
                />
                <div className={`text-center ${classes.rating}`}>
                    <IconButton
                        aria-label="rating"
                        component="span"
                        color={props.values.rating > 0 ? "primary" : "default"}
                    >
                        <StarRoundedIcon />
                    </IconButton>
                    <IconButton
                        aria-label="rating"
                        component="span"
                        color={props.values.rating > 1 ? "primary" : "default"}
                    >
                        <StarRoundedIcon />
                    </IconButton>
                    <IconButton
                        aria-label="rating"
                        component="span"
                        color={props.values.rating > 2 ? "primary" : "default"}
                    >
                        <StarRoundedIcon />
                    </IconButton>
                    <IconButton
                        aria-label="rating"
                        component="span"
                        color={props.values.rating > 3 ? "primary" : "default"}
                    >
                        <StarRoundedIcon />
                    </IconButton>
                    <IconButton
                        aria-label="rating"
                        component="span"
                        color={props.values.rating > 4 ? "primary" : "default"}
                    >
                        <StarRoundedIcon />
                    </IconButton>
                </div>
                <Typography
                    display="block"
                    variant="body1"
                    className="text-black-50"
                >
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur
                </Typography>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <AntSwitch checked={state} onChange={handleChange} />
                    <Typography variant="body1" align="right">
                        Show this Review to My Contacts Only
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}