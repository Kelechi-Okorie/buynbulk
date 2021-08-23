import React from 'react';

/* material-ui */
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme =>({
    root: {

    },

    badge: {
        backgroundColor: '#14A800'
    }
}))

function CartIcon(props) {
    const classes = useStyles(props);
    return (
        <IconButton className={classes.root}>
            <Badge badgeContent={1} color="primary" classes={{colorPrimary: classes.badge}}>
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default CartIcon
