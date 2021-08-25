import React from 'react';

/* material-ui */
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme=> ({
    root: {
        flexGrow: 1,
        margin: '30px 0 25px'
    },

    text: {
        // [theme.breakpoints.down('xs')]: {
        //     padding: `0 ${theme.spacing(2)}px`
        // }
    }
}))

function PageHeading(props) {
    const classes = useStyles(props)
    return (
        <Box component="div" className={classes.root}>
            <Typography variant="h3" component="h3" color="primary" className={classes.text}>
                {props.primary}
            </Typography>
            {props.secondary ?
                <Typography variant="h6" component="h6" className={classes.text}>
                    {props.secondary}
                </Typography>    
                : null
            }
        </Box>
    )
}

export default PageHeading
