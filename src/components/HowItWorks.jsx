import React from 'react';

/* material-ui */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BusinessIcon from '@material-ui/icons/Business';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },

    listContainer: {
        backgroundColor: '#53D33F',
        border: '1px solid #2CCD12',
        borderRadius: '4px',
        marginBottom: '12px'
    },

    heading: {
        marginBottom: '40px',
        paddingRight: '12px',
        // boxSizing: 'border-box'
    },
    
    headingPrimary: {
        [theme.breakpoints.up("sm")]: {
            // textAlign: 'center'
        }
    }
}));

function HowItWorks(props) {
    const classes = useStyles(props);
    return (
        <>
            <Grid xs={false} md={1}></Grid>
            <Grid item xs={12} sm={6} md={5} className={classes.heading}>
                <Typography variant="h4" className={classes.headingPrimary}>How it works</Typography>
                <Typography variant="h6" className={classes.headingSecondary}>Bulk Food Market is a platform that provides access to affordable, quality and nutritious foods </Typography>
            </Grid>
            <Grid item container xs={12} sm={6} md={5}>
                <Grid item sm={12}>
                    <List className={classes.listContainer}>
                        <ListItem>
                            <ListItemAvatar>
                                <MonetizationOnIcon />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Connect and Crowdsource"
                                secondary={
                                    <Typography>
                                        Connect and crowdsource funds to buy foodstuffs in bulk and share to save cost
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={12}>
                    <List className={classes.listContainer}>
                        <ListItem>
                            <ListItemAvatar>
                                <BusinessIcon />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Cheapest price best quality"
                                secondary={
                                    <Typography>
                                        Get food directly from producers for the cheapest possible price and best quality
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid xs={false} md={1}></Grid>
        </>
    )
}

export default HowItWorks
