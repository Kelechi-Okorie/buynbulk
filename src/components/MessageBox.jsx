import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    boxForm: {
        width: '360px',
        maxWidth: '360px',
        margin: '0 auto'
    },

    boxText: {
        width: '360px',
        maxWdith: '360px',
        padding: '20px',

        [theme.breakpoints.up('sm')]: {
            width: '500px'
        }
    },

    textPrimary: {
        margin: '0 0 25px'
    },

    textSecondary: {
        marginBottom: '0 0 35px'
    },

    formRoot: {
        display: 'block',
        padding: '20px',

        '& .MuiTextField-root': {
          margin: '15px 0',
          width: '100%',
          maxWidth: '100%'
        },

    },

    button: {
        borderRadius: '160px'
    }

}));


function MessageBox(props) {
    const classes = useStyles(props);
    return (
        <>
            <Grid item container display="flex" direction="column" alignItems="center" sx={12} className={classes.root}>

                <Grid item xs={12} className={classes.textContainer}>

                    <Box className={classes.boxText}>
                    {props.children}

                    <Typography variant="h4" component="h2" align="center" className={classes.textPrimary}>Send a message</Typography>
                        <Typography align="center" className={classes.textSecondary}>Feel free to get in touch with us on anything related to groceries, or you can jus say hi 👋 and we'll get back to you ass soon as possible</Typography>

                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className={classes.boxForm}>
                        <form className={classes.formRoot}>
                            <TextField fullWidth variant="outlined" id="name" label="Name"className={classes.textField} />
                            <TextField fullWidth id="email" variant="outlined" label="Email" className={classes.textField} />
                            <TextField fullWidth id="subject" variant="outlined" label="Subject" className={classes.textField} />
                            <TextField fullWidth multiline rows={8} id="message" variant="outlined" label="Message" className={classes.textField} />

                            <Box display="flex" justifyContent="center" m={3}>
                                <Button variant="contained" size="large" fullWidth color="primary" className={classes.button}>Send</Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default MessageBox
