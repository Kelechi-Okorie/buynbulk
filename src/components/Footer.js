import React from 'react';

/* custom components */
import ContactInfo from './ContactInfo';
import FooterLinks from './FooterLinks';

/* material-ui */
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#001E00',
        color: '#FFFFFF'
    }
}))

function Footer(props) {
    const classes = useStyles(props);
    return (
        <Grid item container className={classes.root}>
            <Grid item xs={12}>
                <ContactInfo />
            </Grid>

            <Grid item xs={12}>
                <FooterLinks />
            </Grid>
        </Grid>
    )
}

export default Footer
