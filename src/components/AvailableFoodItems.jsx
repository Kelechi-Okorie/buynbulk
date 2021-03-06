import React from 'react';

/* material-ui */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip'


const useStyles = makeStyles((theme) => ({

    root: {
        // backgroundColor: '#D5E0D5',
        padding: '30px 15px',
    },

    foodsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },

    foodItem: {
        backgroundColor: '#14A800',
        color: '#F2F2F2'
    }
  }));


function AvailableFoodItems(props) {
    const classes = useStyles(props);

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item xs={12}>
                <Box><Typography variant="h5" component="h2">Available food items</Typography></Box>
            </Grid>
            <Grid item xs={12} className={classes.foodsContainer}>
                <Chip label="Tomatoes (fresh)" classes={{root: classes.foodItem}}/>
                <Chip label="Groundnut Oil" classes={{root: classes.foodItem}}/>
                <Chip label="Rice" classes={{root: classes.foodItem}}/>
                <Chip label="Crayfish" classes={{root: classes.foodItem}}/>
                <Chip label="Stockfish" classes={{root: classes.foodItem}}/>
                <Chip label="Yam" classes={{root: classes.foodItem}}/>
                <Chip label="Ice Fish" classes={{root: classes.foodItem}}/>
                <Chip label="Goat" classes={{root: classes.foodItem}}/>
                <Chip label="Cow" classes={{root: classes.foodItem}}/>
                <Chip label="Pepper (fresh)" classes={{root: classes.foodItem}}/>
                <Chip label="Onions" classes={{root: classes.foodItem}}/>
                <Chip label="Palm Oil" classes={{root: classes.foodItem}}/>
            </Grid>
        </Grid>
    )
}

export default AvailableFoodItems
