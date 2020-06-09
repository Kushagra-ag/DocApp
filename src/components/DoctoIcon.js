import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

	icon: {
    backgroundColor: '#5F82E2',
    color: '#fff',
    width: '150px',
    height: '150px',
    borderRadius: 10,
    fontSize: '30px',
    boxShadow: '0 0 12px 0px #00000030'
  }
}));

export default function DoctorIcon() {
	const classes = useStyles();

  	return(
  		<div className= {`font-weight-bold d-flex justify-content-center align-items-center my-4 ${classes.icon}`} >
            Docto.
        </div>
  	)

}