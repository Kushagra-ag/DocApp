import React from 'react';
import CustomTextField from '../../components/CustomTextField.js';
import { Select, MenuItem } from '@material-ui/core';

export default function Reviews() {

	return(
		<div className="col-md-4 text-center text-md-left">
			<Select
	        	labelId="demo-customized-select-label"
		       	id="demo-customized-select"
		       	// className={classes.margin}
		        disableUnderline
		        placeholder="Speciality"
	          // 	value={age}
	         	// onChange={handleChange}
		       	input={<CustomTextField />}
		        >
		      	<MenuItem value="">
	            	<em>Select Speciality</em>
	          	</MenuItem>
		      	<MenuItem value='surgeon'>Surgeon</MenuItem>
	          	<MenuItem value='dentist'>Dentist</MenuItem>
	          	<MenuItem value='cardiologist'>Cardiologist</MenuItem>
		    </Select>
		</div>
	)
}