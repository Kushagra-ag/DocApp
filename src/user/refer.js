import React from 'react';
import { Button, Typography, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from '../components/CustomTextField.js';
import Contact from './contact.js';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceAround',
        backgroundColor: '#fff',
        paddingTop: theme.spacing(2, 1),
        borderRadius: '10px'
    },
    margin: {
        margin: theme.spacing(1),
        textTransform: 'capitalize'
    },
    blueBtn: {
        color: '#fff',
        backgroundImage: 'linear-gradient(to bottom, #5F7EBE, #3B5998)'
    },
    phone: {
        color: '#5F82E2',
        border: '1px solid #5F82E2',
        backgroundColor: '#fff'
    }
}));

function Form() {
    const classes = useStyles();

    const [speciality, setSpeciality] = React.useState('');
    const handleChange = event => {
        setSpeciality(event.target.value);
    };

    return (
        <form className={classes.form} method="POST">
            <CustomTextField
                id="name"
                label="name"
                className={classes.margin}
                disableUnderline
                placeholder="Doctor's Name"
                required
            />
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                className={classes.margin}
                disableUnderline
                displayEmpty
                placeholder="Speciality"
                value={speciality}
                onChange={handleChange}
                input={<CustomTextField />}
            >
                <MenuItem value="">Select Speciality</MenuItem>
                <MenuItem value="surgeon">Surgeon</MenuItem>
                <MenuItem value="dentist">Dentist</MenuItem>
                <MenuItem value="cardiologist">Cardiologist</MenuItem>
            </Select>
            <CustomTextField
                id="phone"
                label="phone"
                className={classes.margin}
                disableUnderline
                placeholder="Location"
                required
            />
            <CustomTextField
                id="profile"
                label="profile"
                className={classes.margin}
                disableUnderline
                placeholder="Profile link"
                required
            />
            <Button
                variant="contained"
                className={`${classes.margin} ${classes.blueBtn}`}
                type="submit"
            >
                <Typography variant="caption" className={classes.margin}>
                    Submit
                </Typography>
            </Button>
        </form>
    );
}

export default function Refer() {
    return (
        <>
            <div className="col-md-8 pl-md-5 overflow-hidden text-center text-sm-left">
                <div className="row py-4">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <Typography color="primary" variant="h5">
                                    Help others. Refer to a Doctor you already
                                    know.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-6">
                        <Form />
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}
