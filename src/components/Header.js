/* React imports */
import React, {useState } from 'react';

/* custom components */
// import CartIcon from './CartIcon';
import WhatsAppButton from './WhatsAppButton';

/* Material-ui imports */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from "@material-ui/core/Slide";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Clear from '@material-ui/icons/Clear';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

// const theme = createTheme(theme)

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: '#ffffff'
        }
    },

    root: {
      flexGrow: 1,
      borderBottom: '1px solid #d5e0d5',
    },
  
    flex: {
      flex: 1,
    },
  
    headerMenu: {
        textTransform: 'none',
    },

    offset: theme.mixins.toolbar,

    drawerPaper: {
        width: '100%',
        backgroundColor: '#FAFAFA',
    },

    drawerHeadingPaper: {
        border: 'none',
        padding: theme.spacing(0.8)
    },
    drawerHeading: {

    },

    drawerListItemPaper: {
        marginBottom: theme.spacing(0.2)
    },

    logo: {
        fontSize: '1.5rem'
    },
    // hamburgerMenu: {
    //     display: 'none'
    // };

}));


const headersData = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
];



function HideOnScroll(props) {
    const { children, window } = props;
  
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
  
      </Slide>
    );
}
  
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
}


const Header = (props) => {
    const classes = useStyles(props);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerClose = () => setDrawerOpen(false);
    const handleDrawerOpen = () => setDrawerOpen(true);


    const getMenu = ({headerMenu}) => {
        return headersData.map(({label, href}) => {
            return (
                <Button
                {...{
                    key: label,
                    href: href,
                    component: Link,
                    
                }}
                className={headerMenu}
                >
                    {label}
                </Button>
            )
        })
    }

    
    const getDrawerChoices = () => {
        const listItems = headersData.map(({label, href}) => {
            return (
                <Paper square elevation={0} className={classes.drawerListItemPaper}>                    
                    <ListItem button component="a" color="primary" href={href}>
                        <ListItemText primary={label} />
                    </ListItem>
                </Paper>
            );
        });

        return (
            <List>
                {listItems}
            </List>
        );
    }

    const getLogo = (
        <Typography variant="h6" component="span" className={classes.logo} >
            <Link href="/" variant="inherit"  underline="none">Buy N Bulk</Link>
        </Typography>
    )

    return (
        <Grid sx={12}>
            <div className={classes.root}>
            <CssBaseline />
            <HideOnScroll>
                <AppBar /* position="fixed" */ color="white" elevation={0}>
                    <Toolbar>
                        <Drawer
                            {...{
                                anchor: "left",
                                open: drawerOpen,
                                onClose: handleDrawerClose
                            }}
                            classes= {{
                                paper: classes.drawerPaper
                            }}
                            className={classes.drawer}
                        >
                            <Box className={classes.drawerHeading}>
                                <Paper square variant="outlined" classes={{root: classes.drawerHeadingPaper}}>
                                    <Grid container justify="space-between" p={10}>
                                        <Grid item xs={12}>
                                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                                <Box display="flex" alignItems="center" >
                                                    <IconButton>
                                                        <Clear onClick={handleDrawerClose} mr={3}/>
                                                    </IconButton>
                                                    {getLogo}
                                                </Box>
                                                <WhatsAppButton /* style={{marginRight: '2%'}} */ />
                                            </Box>
                                        </Grid>
                                        
                                    </Grid>
                                </Paper>
                            </Box>
                            {/* <Divider /> */}
                            <div>{getDrawerChoices()}</div>
                        </Drawer>

                        <Hidden mdUp>
                            <IconButton
                            {...{
                                edge: "start",
                                color: "inherit",
                                "arial-label": "menu",
                                "arial-haspopup": "true",
                                onClick: handleDrawerOpen
                            }}
                            className={classes.hamburgerMenu}
                            >
                                <DehazeIcon />
                            </IconButton>
                        </Hidden>
                        {getLogo}
                        
                        <Box component="span" style={{marginLeft: 'auto'}}>
                            <Hidden smDown>
                                <Box display="inline">
                                    {getMenu({...classes})}
                                </Box>
                            </Hidden>

                            <WhatsAppButton />
                        </Box>
                    </Toolbar>

                </AppBar>
            </HideOnScroll>
            <div className={classes.offset} />
        </div>
        </Grid>
    )
};
export default Header
