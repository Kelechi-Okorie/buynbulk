import React from 'react';

/* custom components */
import Header from '../components/Header';
import Footer from '../components/Footer';


/* material-ui */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#F2F2F2',
    },
    
    shoppingCartHeader: {

    },
    orderSummarySMPaper: {
        width: '100%'
    },
    orderSummarySMH4: {
        margin: 0
    }
}));

let ShoppingCartHeader = (props) => {
    return (
        <Box pt={2} px={1}>
            <h3>Shopping Cart</h3>
        </Box>
    );
}

let OrderSummarySM = ({orderSummarySMPaper, orderSummarySMH4}) => {
    return (
        <Paper square="false" elevation={0} classes={{root: orderSummarySMPaper}}>            
            <Box display="flex" justifyContent="space-between" p={1.5} px={1.5}>
                <h4 className={orderSummarySMH4}>Total ( 3 items)</h4>
                <h4 className={orderSummarySMH4}>N9,180</h4>
            </Box>
        </Paper>
    );
}

let ContinueShoppingButton = (props) => {
    return (
        <Box p={1.5}>
            <Button
                variant="outlined"
                style={{textTransform: 'none'}}
                startIcon={<ArrowBack />}
            >
                Continue Shopping
            </Button>
        </Box>
    );
}


function ShoppingCart(props) {
    const classes = useStyles(props);

    return (
        <Grid container direction="column" className={classes.root}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            
            <Grid item xs={12}>
                <ShoppingCartHeader />
            </Grid>

            <Grid item xs={12}>
                <OrderSummarySM {...classes} />
            </Grid>

            <Grid item xs={12}>
                <ContinueShoppingButton {...classes} />
            </Grid>

            <Grid item xs={12}>
                <Footer />
            </Grid>

        </Grid>
    )
}

export default ShoppingCart
