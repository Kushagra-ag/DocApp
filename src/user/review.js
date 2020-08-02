import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField.js';
import AntSwitch from '../components/AntSwitch.js';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Contact from './contact.js';
import importedStyles from '../styles/styles.js';

export default function Review() {
    const classes = importedStyles();
    const [rating, setRating] = useState(0);
    const [value, setValue] = useState('Yes');
    const [comment, setComment] = useState('');
    const [state, setState] = useState(true);

    const ratingChange = number => {
        setRating(number);
    };

    const radioChange = event => {
        setValue(event.target.value);
    };

    const CommentChange = event => {
        setComment(event.currentTarget.value);
    };

    const handleStateChange = event => {
        setState(event.target.checked);
    };

    return (
        <>
            <div className="col-sm-8 col-lg-5 pt-4 pl-md-5 text-center text-md-left mr-auto">
                <Card className="mb-3 p-3 text-left">
                    <CardContent>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            display="block"
                        >
                            How many stars would you give this Doctor?
                            <div className="mt-3">
                                <IconButton
                                    aria-label="rating"
                                    component="span"
                                    color={rating > 0 ? 'primary' : 'default'}
                                    onClick={() => {
                                        ratingChange(1);
                                    }}
                                    edge="start"
                                >
                                    <StarRoundedIcon fontSize="large" />
                                </IconButton>
                                <IconButton
                                    aria-label="rating"
                                    component="span"
                                    color={rating > 1 ? 'primary' : 'default'}
                                    onClick={() => {
                                        ratingChange(2);
                                    }}
                                >
                                    <StarRoundedIcon fontSize="large" />
                                </IconButton>
                                <IconButton
                                    aria-label="rating"
                                    component="span"
                                    color={rating > 2 ? 'primary' : 'default'}
                                    onClick={() => {
                                        ratingChange(3);
                                    }}
                                >
                                    <StarRoundedIcon fontSize="large" />
                                </IconButton>
                                <IconButton
                                    aria-label="rating"
                                    component="span"
                                    color={rating > 3 ? 'primary' : 'default'}
                                    onClick={() => {
                                        ratingChange(4);
                                    }}
                                >
                                    <StarRoundedIcon fontSize="large" />
                                </IconButton>
                                <IconButton
                                    aria-label="rating"
                                    component="span"
                                    color={rating > 4 ? 'primary' : 'default'}
                                    onClick={() => {
                                        ratingChange(5);
                                    }}
                                >
                                    <StarRoundedIcon fontSize="large" />
                                </IconButton>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="mb-3 p-3 text-left">
                    <CardContent>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            display="inline"
                        >
                            Add your comments &nbsp;
                        </Typography>
                        <Typography
                            variant="h6"
                            color="initial"
                            display="inline"
                        >
                            (optional)
                        </Typography>
                        <br />
                        <TextField
                            id="comments"
                            label=""
                            value={comment}
                            onChange={CommentChange}
                        />
                    </CardContent>
                </Card>
                <Card className="mb-3 p-3 text-left">
                    <CardContent>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            display="block"
                        >
                            Would you recommend this Doctor to your contacts?
                        </Typography>
                        <br />
                        <RadioGroup
                            aria-label="recommend"
                            name="recommend"
                            value={value}
                            onChange={radioChange}
                        >
                            <FormControlLabel
                                value="Yes"
                                control={<Radio />}
                                label="Yes"
                                className="mb-0"
                            />
                            <FormControlLabel
                                value="No"
                                control={<Radio />}
                                label="No"
                            />
                        </RadioGroup>
                    </CardContent>
                </Card>
                <div className="d-flex justify-content-between align-items-center mb-3 p-4">
                    <AntSwitch checked={state} onChange={handleStateChange} />
                    <Typography variant="body1" align="right">
                        Show this Review to My Contacts Only
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    className={`${classes.margin} ${classes.blueBtn} mb-5`}
                    component={Link}
                    to="#"
                >
                    <Typography variant="caption" className={classes.margin}>
                        Submit
                    </Typography>
                </Button>
            </div>
            <Contact />
        </>
    );
}
