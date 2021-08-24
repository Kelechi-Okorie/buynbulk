/* React imports */
import React, {useState, useEffect} from 'react';

/* custom components */
import CartIcon from './CartIcon';
import WhatsAppButton from './WhatsAppButton';

/* Material-ui imports */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from "@material-ui/core/Slide";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem'
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Clear from '@material-ui/icons/Clear';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

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
  
    MenuButton: {
      marginLeft: -12,
      marginRight: 20,
    },  

    loginButton: {
        color: '#001E00',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',
        },
    },

    logoutButton: {
        color: '#001E00',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',
        },
    },

    offset: theme.mixins.toolbar,

    drawerPaper: {
        width: '100%'
    },

    logo: {
        fontSize: '1.5rem'
    },
    hamburgerMenu: {
        fontSize: '5rem',
    }

}));


const headersData = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    }
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


    const getMenu = () => {
        return headersData.map(({label, href}) => {
            return (
                <Button
                {...{
                    key: label,
                    to: href,
                    component: Link,
                    
                }}
                >
                    {label}
                </Button>
            )
        })
    }

    
    const getDrawerChoices = () => {
        return headersData.map(({label, href}) => {
            return (
                <Link
                    {...{
                        component: Link,
                        to: href,
                        color: "inherit",
                        style: {textDecoration: "none"},
                        key: label
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            )
        })
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
                        >
                            <Box p={1.3}>
                                <Grid container justify="space-between" p={10}>
                                    <Grid item xs={12}>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Box display="flex" alignItems="center" >
                                                <IconButton>
                                                    <Clear onClick={handleDrawerClose} mr={3}/>
                                                </IconButton>
                                                {getLogo}
                                            </Box>
                                            <WhatsAppButton />
                                        </Box>
                                    </Grid>
                                    
                                </Grid>
                            </Box>
                            <Divider />
                            <div>{getDrawerChoices()}</div>
                        </Drawer>

                        <IconButton
                        {...{
                            edge: "start",
                            color: "inherit",
                            "arial-label": "menu",
                            "arial-haspopup": "true",
                            onClick: handleDrawerOpen
                        }}
                        >
                            <DehazeIcon />
                        </IconButton>
                        {getLogo}
                        
                        <Box component="span" style={{marginLeft: 'auto'}}>
                            <Hidden smDown>
                                <Box display="inline">
                                    {getMenu}
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
