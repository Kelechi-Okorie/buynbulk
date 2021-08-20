import React from 'react'

/* material-ui */
import {makeStyles, createTheme, ThemeProvider} from '@material-ui/core/Styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },

    media: {
        height: '100px',
        paddingTop: '56.25%'
    },

    button: {
        borderRadius: '160px'
    }
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
    const {title: name, price: pricePerSlot, description, imageUrl} = props;
    const noOfSlots = 50;

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
                    <Button color="primary" size="medium" variant="contained" elevation={0} className={classes.button} >ORDER NOW</Button>
                </ThemeProvider>
                <Button size="small">OFFER</Button>
            </CardActions>

        </Card>
    )
}

export default CardFood
