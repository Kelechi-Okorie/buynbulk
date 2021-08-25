import React from 'react';

/* custom */
import environment from '../adapters/environment';

/* material-ui */
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=> ({
    root: {
        flexGrow: 1,
        padding: `0 ${theme.spacing(2)}px`
    }
}))


function AboutInfo(props) {
    const classes = useStyles(props)
    return (
        <Grid item container className={classes.root}>
            <Grid item xs={false} sm={1} md={2}></Grid>
            <Grid item xs={12} sm={10} md={8}>
                {props.children}
                <Typography>
                    {environment.app.name} is a digital food cooperative platorm for Nigerian consumers. The platform aims to encourage bulk buying of food items amongs Nigerian consumers to save cost and get more value for their money as compared to retail buying. <br /><br />

                    The platform provides access to affordable, quality and nutritious food items for consumers for bulk buying
                </Typography>                
            </Grid>
            <Grid item xs={false} sm={1} md={2}></Grid>
        </Grid>
    )

}

export default AboutInfo
