import React from 'react';

/* Material-ui */
import Container from '@material-ui/core/Container';
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
        clipPath: 'circle(39% at 50% 50%)'
    },
    bannerImg: {
        width: '100%',
        height: '100%'
    },
    box: {
        padding: '20px'
    }
}))



function Banner(props) {
    const classes = useStyles(props)
    return (
        <>
            <Grid xs={false} md={1}></Grid>
            <Grid item xs={12} sm={6} md={5}>
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
            </Grid>
            <Hidden only="xs">
                <Grid item sm={6} md={5}>
                    <figure className={classes.bannerFigure}>
                        <img src="food1.jpg" alt="image of food" className={classes.bannerImg} />
                    </figure>
                </Grid>
            </Hidden>
            <Grid xs={false} md={1}></Grid>
        </>
    )
}

export default Banner
