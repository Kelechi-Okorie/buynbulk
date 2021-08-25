import React from 'react';

/* custom */
import WhatsAppButton from './WhatsAppButton';

/* Material-ui */
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '20px 0 0'
    },

    bannerText: {
        // marginBottom: '20px'
    },

    bannerTextPrimary: {
        fontSize: '48px',
        lineHeight: '65px',
        padding: '0 15px',
        color: '#14A800',

        [theme.breakpoints.up('lg')]: {
            fontSize: '70px',
            lineHeight: '80px'
        }
    },

    bannerTextSecondary: {
        padding: '0 15px'
    },

    bannerFigure: {
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
        [theme.breakpoints.up('sm')]: {
            clipPath: 'circle(39% at 50% 50%)'
        }
    },
    bannerImg: {
        width: '100%',
        height: '100%'
    },
    box: {
        padding: '20px'
    }
}));

function Banner(props) {
    const classes = useStyles(props)
    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid xs={false} md={1}></Grid>
            <Grid item xs={12} sm={6} md={5} className={classes.bannerText}>
                <Typography variant="h3" component="h1"
                    classes= {{
                        h3: classes.bannerTextPrimary
                    }}
                >
                    Buy foodstuffs in bulk to save cost
                </Typography>
                <Typography variant="h6" component="h1"
                    classes={{
                        h6: classes.bannerTextSecondary
                    }}
                >
                    Contribute money with other people to buy foodstuffs in bulk and share
                </Typography>

                <Box component="div" display="flex" justifyContent="space-around" p={2}>
                    <Button href="/contact" variant="contained" color="primary" style={{borderRadius: '16px'}}>
                        Contact Us
                    </Button>
                    <WhatsAppButton variant="outlined" />
                </Box>
            </Grid>
            <Hidden /* only="xs" */>
                <Grid item sm={6} md={5}>
                    <figure className={classes.bannerFigure}>
                        <img src="food1.jpg" alt="image of food" className={classes.bannerImg} />
                    </figure>
                </Grid>
            </Hidden>
            <Grid xs={false} md={1}></Grid>
        </Grid>
    )
}

export default Banner
