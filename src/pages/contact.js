import React from 'react';

/* custom */
import Header from '../components/Header';
import Footer from '../components/Footer';
/* material-ui */
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}))

function Contact(props) {
    const classes = useStyles(props)
    return (
        <Grid container direction="column" className={classes.root}>
            <Header />

            

            <Footer />
        </Grid>
    )
}

export default Contact
