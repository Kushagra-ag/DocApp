import { FilledInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const CustomTextField = withStyles({
  root: {
    borderRadius: '10px',
  },
  input: {
    padding: '20px 12px',
  },
})(FilledInput);

export default CustomTextField;