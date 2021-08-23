import React from 'react';

/* components */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import FoodItemsContainer from '../components/FoodItemsContainer';
import HowItWorks from '../components/HowItWorks';

/* Material-ui */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },

    banner: {
        padding: '30px 0'
    },

    howItWorks: {
        backgroundColor: '#14A800',
        color: '#F2F2F2',
        padding: '5px'
    }
    
}));

function Home(props) {
    const classes = useStyles(props);
    return(
        <Grid container direction="column" className={classes.root}>

            <Grid item xs={12}>
                <Header />
            </Grid>

            <Grid item container className={classes.banner} xs={12}>
                <Banner />
            </Grid>
            
            <Grid item container xs={12} className={classes.howItWorks}>
                <HowItWorks />
            </Grid>

            <Grid item xs={12}>
                <Footer />
            </Grid>


        </Grid>
    )
}

export default Home