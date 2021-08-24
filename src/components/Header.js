/* React imports */
import React, {useState, useEffect} from 'react';

/* custom components */
import CartIcon from './CartIcon';

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
        color: '#14A800'
    }

}));


const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
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

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const {mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 
                ? setState(prevState => ({...prevState, mobileView: true}))
                : setState(prevState => ({...prevState, mobileView: false}));
        }

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', setResponsiveness);
        }
    }, []);

    const displayDeskTop = () => {
        const getMenuButtons = () => {
            return headersData.map(({label, href}) => {
                return (
                    <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: Link,
                        
                    }}
                    >
                        {label}
                    </Button>
                )
            })
        }
    
        return (
            <Toolbar>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        {getLogo}
                    </Grid>
                    <Grid item>
                        <div>
                            {getMenuButtons()}
                        </div>
                    </Grid>
                    <Grid item>
                        <div>
                            {getLogInAndLogOutButtons}
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        )
    }

    
    const displayMobile = () => {
        const handleDrawerOpen = () => setState(prevState => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () => setState(prevState => ({...prevState, drawerOpen: false}));

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

        return (
            <Toolbar>
                <Grid container justify="space-between" >
                    <Grid item>
                        <Box component="div" display="flex" alignItems="center">
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
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box component="div" display="flex" alignItems="center" height="100%">
                            {getLogInAndLogOutButtons}
                        </Box>
                    </Grid>
                </Grid>

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
                            <Grid item>
                                <Box component="div" display="flex" alignItems="center">
                                    <Clear onClick={handleDrawerClose} mr={3}/>
                                    {getLogo}
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box component="div" display="flex" alignItems="center">
                                    <CartIcon />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <div>{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        )
    }

    const getLogo = (
        <Typography variant="h6" component="span" className={classes.logo} >
            <Link href="/" variant="inherit" color="inherit" underline="none">Buy N Bulk</Link>
        </Typography>
    )

    const getLogInAndLogOutButtons = (
        <>
            <Button className={classes.loginButton}>
                Login
            </Button>
            <Button className={classes.logoutButton}>
                Sign Up
            </Button>
            <CartIcon />
        </>
    );


    return (
        <div className={classes.root}>
            <CssBaseline />
            <HideOnScroll>
                <AppBar position="fixed" color="white" elevation={0}>
                    {mobileView ? displayMobile() : displayDeskTop()}
                </AppBar>
            </HideOnScroll>
            <div className={classes.offset} />
        </div>
    )
};
export default Header
