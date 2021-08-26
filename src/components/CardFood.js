import React, { useState } from 'react';

/* custom */
import '../adapters/faker/constants';

/* material-ui */
import {makeStyles, createTheme, ThemeProvider} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { green} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        margin: '0 auto'
    },

    media: {
        height: '100px',
        paddingTop: '56.25%'
    },

    button: {
        borderRadius: '160px'
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const theme = createTheme({
    palette: {
        primary: green,
        text: {
            primary: '#FFFFFF'
        }
    },
})


function CardFood(props) {
    const classes = useStyles(props);
    const [openOrderDialog, setOpenOrderDialog] = useState(false);
    const {title: name, price: pricePerSlot, description, imageUrl} = props;
    const noOfSlots = 50;

    const handleOpenOrderDialog = () => {
        console.log('order made');
        setOpenOrderDialog(true);
    }
    const handleCloseOrderDialog = () => {
        setOpenOrderDialog(false);
    }

    const confirmOrder = () => {
        console.log('order confirmed')
    }

    const OrderDialogTitle = ({children, classes, onClose, ...other}) => {
        return (
            <MuiDialogTitle>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    ) : null}
            </MuiDialogTitle>
        )
    }

    const Naira = (props) => (
        <span>&#8358; {props.pricePerSlot}</span>
    );


    return (
        <Card className={classes.root}>
             <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    B
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={name}
                subheader={noOfSlots}
            />
            <CardMedia
                className={classes.media}
                image={imageUrl}
                title={name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <ThemeProvider theme={theme}>
                    <Button /* onClick={handleOpenOrderDialog} */ href="cart" color="primary" size="medium" variant="outlined" elevation={0} className={classes.button} >ORDER NOW</Button>
                </ThemeProvider>
                <Button size="small">OFFER</Button>
            </CardActions>
            <Dialog open={openOrderDialog} arial-labelledby="order an item">
                <OrderDialogTitle id="orderDialog" onClose={handleCloseOrderDialog}>
                    Confirm order
                </OrderDialogTitle>
                <MuiDialogContent><p>content</p></MuiDialogContent>
                <MuiDialogActions><Button variant="contained" color="primary">Test</Button></MuiDialogActions>
            </Dialog>
        </Card>
    )
}

export default CardFood
