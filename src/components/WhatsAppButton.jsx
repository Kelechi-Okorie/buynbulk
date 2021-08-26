import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
    root: {
        // marginLeft: 'auto',
        borderRadius: '160px'
    }
}));


function WhatsAppButton(props) {
    const classes = useStyles(props)
    return (
            <Button
                className={classes.root}
                variant="contained"
                color="primary"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/+2348067989766"
                target="_blank"
                {...props}
            >
                Join Us
            </Button>
    )
}

export default WhatsAppButton
