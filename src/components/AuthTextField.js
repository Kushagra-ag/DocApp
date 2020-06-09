import { FilledInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const AuthTextField = withStyles({
  root: {
    borderRadius: '10px',
  },
  input: {
    padding: '20px 12px',
  },
})(FilledInput);

export default AuthTextField;