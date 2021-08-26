import React from 'react';

/* components */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
// import FoodItemsContainer from '../components/FoodItemsContainer';
import HowItWorks from '../components/HowItWorks';
import CarouselElement from '../components/Carousel';
import AvailableFoodItems from '../components/AvailableFoodItems';

/* Material-ui */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    
}));

// Each component is a <Grid item xs={12}></Grid>
function Home(props) {
    const classes = useStyles(props);
    return(
        <Grid container direction="column" className={classes.root}>

            <Header />

            <Banner />
            
            <CarouselElement />

            <HowItWorks />

            <AvailableFoodItems />
            <Footer />

        </Grid>
    )
}

export default Home
