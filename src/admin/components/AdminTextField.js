import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const AdminTextField = withStyles({

    root: {
        '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4a6bc5',
      },
    },
    "& label": {
    color: "#4a6bc5"
}
},

})(TextField)

export default AdminTextField;