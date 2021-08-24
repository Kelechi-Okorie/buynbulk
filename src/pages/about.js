import React from 'react'

/* components */
import Header from '../components/Header';
import Footer from '../components/Footer';

/* material-ui */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));


function About(props) {
    const classes = useStyles(props);
    return (
        <Grid container direction="column" className={classes.root}>

        </Grid>
    )
}

export default About
