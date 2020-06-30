import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const AntSwitch = withStyles(theme => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex'
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.primary.main,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.grey[200],
                borderColor: theme.palette.primary.main
            }
        }
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none'
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white
    },
    checked: {}
}))(Switch);

export default AntSwitch;
