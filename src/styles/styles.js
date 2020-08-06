import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden'
        // backgroundColor: theme.palette.background.paper,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceAround',
        backgroundColor: '#fff',
        padding: theme.spacing(2, 1),
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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(90deg)'
    },
    gridList: {
        flexWrap: 'nowrap!important',
        transform: 'translateZ(0)',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            width: 0
        }
    },
    navIcons: {
        '& svg': {
            zIndex: '10',
            fontSize: '70px'
        },
        '& button:focus,button:hover': {
            outline: 'none',
            backgroundColor: 'transparent'
        }
    }
}));

export default styles;
