import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(() => ({

	icon: {
    position: 'relative',
    backgroundColor: '#5F82E2',
    color: '#fff',
    width: '150px',
    height: '150px',
    borderRadius: 10,
    fontSize: '30px',
    boxShadow: '0 0 12px 0px #00000030',
  }
}));

export default function DoctorIcon() {
	const classes = useStyles();
  const display = useMediaQuery('(max-width:767px)') ? 'block' : 'none';

  	return(
    	<div className="my-4 position-relative">
        <div className={`h-50 position-absolute d-${display}`} style={{top:'50%',left:'-100vw',width:'200vw',backgroundColor:'#f4f5fb'}}>
        </div>
        <div className= {`font-weight-bold d-flex justify-content-center align-items-center ${classes.icon}`} >
          Docto.
        </div>
      </div>
  	)

}