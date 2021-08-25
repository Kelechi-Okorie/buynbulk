import React from 'react'

/* components */
import Header from '../components/Header';
import Footer from '../components/Footer';

/* custom */
import PageHeading from '../components/PageHeading';
import AboutInfo from '../components/AboutInfo';

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
            <Header />

            

            <AboutInfo>
                <PageHeading primary="About Us" secondary="Spend less, buy more, save more" />
            </AboutInfo>

            <Footer />

        </Grid>
    )
}

export default About
