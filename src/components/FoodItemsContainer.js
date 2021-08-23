import React from 'react';

import CardFood from '../components/CardFood';
import Grid from '@material-ui/core/Grid';
import foodItems from '../adapters/faker/constants';

/* material-ui */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   
}));

function FoodItemsContainer(props) {
    const classes = useStyles(props);

    const getFoodItemsCard = foodItemsObj => {
        return (
            <Grid item xs={12} sm={4}>
                <CardFood {...foodItemsObj} />
            </Grid>
        )
    }
    return (
        <Grid container>
            {foodItems.map(foodItemsObj => getFoodItemsCard(foodItemsObj))}
        </Grid>
    )
}

export default FoodItemsContainer
