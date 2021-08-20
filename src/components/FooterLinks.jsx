import React from 'react'

/* material-ui */
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px 17px',
    },

    linksHeader: {
        fontSize: '15px',
    },

    linksText: {
        fontSize: '13px',
    },

    socialsLinksContainer: {
        margin: '0px',
        padding: '8px 0px 0px 0px',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',

        "& a": {
            padding: '12px',
            color: 'inherit',
            fontSize: '30px',
            borderRadius: '50%'
        }
    },
    divider: {
        backgroundColor: '#FFFFFF'
    }
}))

const AboutBNB = ({linksHeader, linksText, divider}) => (
    <>
        <Typography className={linksHeader}>ABOUT BNB</Typography>
        <Hidden smUp>
            <Divider classes={{root: divider}} />
        </Hidden>
        <List disablePadding={true}>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>How BNB Works</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Contact Us</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>About Us</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Careers Us</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Terms and Conditions</Link></ListItemText>
            </ListItem>
        </List>
    </>
);

const Payment = ({linksHeader, linksText, divider}) => (
    <>
        <Typography className={linksHeader}>PAYMENT</Typography>
        <Hidden smUp>
            <Divider classes={{root: divider}} />
        </Hidden>
        <List disablePadding={true}>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Verve</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>MasterCard</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>VisaCard</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Bank Transfer</Link></ListItemText>
            </ListItem>
        </List>
    </>
);

const BuyingOnBNB = ({linksHeader, linksText, divider}) => (
    <>
        <Typography className={linksHeader}>BUYING ON BNB</Typography>
        <Hidden smUp>
            <Divider classes={{root: divider}} />
        </Hidden>
        <List disablePadding={true}>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Buyer Safety Center</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>FAQs</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Delivery</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Return Policy</Link></ListItemText>
            </ListItem>
        </List>
    </>
);
const MoreInfo = ({linksHeader, linksText, divider}) => (
    <>
        <Typography className={linksHeader}>MORE INFO</Typography>
        <Hidden smUp>
            <Divider classes={{root: divider}} />
        </Hidden>
        <List disablePadding={true}>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>SiteMap</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Track My Order</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Privacy Policy</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Return Policy</Link></ListItemText>
            </ListItem>
        </List>
    </>
);
const MakeMoneyOnBNB = ({linksHeader, linksText, divider}) => (
    <>
        <Typography className={linksHeader}>MAKE MONEY ON BNB</Typography>
        <Hidden smUp>
            <Divider classes={{root: divider}} />
        </Hidden>
        <List disablePadding={true}>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Become a BNB Supplier</Link></ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemText><Link href="#" color="inherit" className={linksText}>Become a BNB Affliate</Link></ListItemText>
            </ListItem>
        </List>
    </>
);

const ConnectWithUs = ({linksHeader, linksText, socialsLinksContainer, divider}) => (
    <>
        <Typography className={linksHeader}>CONNECT WITH US</Typography>
        <Hidden smUp>
            <Divider classes={{root: divider}} />
        </Hidden>
        <ul className={socialsLinksContainer}>
            <li><Link href="https://www.facebook.com"><FacebookIcon /></Link></li>
            <li><Link href="https://www.twitter.com"><TwitterIcon /></Link></li>
            <li><Link href="https://www.instagram.com"><InstagramIcon /></Link></li>
            <li><Link href="https://www.youtube.com"><YouTubeIcon /></Link></li>
        </ul>
    </>
);

function FooterLinks(props) {
    const classes = useStyles(props);
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={6} md={4}>
                <AboutBNB {...classes} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Payment {...classes} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <MoreInfo {...classes} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <MakeMoneyOnBNB {...classes} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <BuyingOnBNB {...classes} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ConnectWithUs {...classes} />
            </Grid>
        </Grid>
    )
}

export default FooterLinks
