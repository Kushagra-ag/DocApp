import React, { useState } from 'react';
import { Button, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField.js';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import VerticalMenu from '../components/VerticalMenu.js';
import BottomNav from '../components/BottomNav.js';
import TopBar from '../components/TopBar.js';

const useStyles = makeStyles(theme => ({
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "spaceAround",
        backgroundColor: "#fff",
        paddingTop: theme.spacing(2, 1),
        borderRadius: "10px",
    },
    margin: {
        margin: theme.spacing(1),
        textTransform: "capitalize",
    },
    facebook: {
        color: "#fff",
        backgroundImage: "linear-gradient(to bottom, #5F7EBE, #3B5998)",
    },
    phone: {
        color: "#5F82E2",
        border: "1px solid #5F82E2",
        backgroundColor: "#fff",
    },
}));

function Form() {
    const classes = useStyles();

      const [age, setAge] = React.useState('');
	  const handleChange = (event) => {
	    setAge(event.target.value);
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
		        placeholder="Speciality"
	          	value={age}
	         	onChange={handleChange}
		       	input={<CustomTextField />}
		        >
		      	<MenuItem value="">
	            	<em>Select Speciality</em>
	          	</MenuItem>
		      	<MenuItem value='surgeon'>Surgeon</MenuItem>
	          	<MenuItem value='dentist'>Dentist</MenuItem>
	          	<MenuItem value='cardiologist'>Cardiologist</MenuItem>
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
                className={`${classes.margin} ${classes.facebook}`}
                type="submit">
                <Typography variant="caption" className={classes.margin}>
                    Submit
                </Typography>
            </Button>
            
        </form>
    );
}

export default function Refer() {

	return(
		<>
		
				<div className="col-md-9 col-lg-10 overflow-hidden text-center text-sm-left">
					<div className="row pt-4">
						<div className="col-12">
							<div className="row">
								<div className="col-12">
									<Typography color="primary" variant="h5">
										Help others. Refer to a Doctor you already know.
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
			
		</>
	)
}