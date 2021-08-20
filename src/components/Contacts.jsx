import React from 'react';

/* custom */
import SearchBox from './SearchBox';

/* material-ui */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';

const styles = makeStyles(theme => ({
    listRoot: {
        width: '100%'
    },
    listItemText: {
        color: '#FFFFFF'
    }
}));

function Contacts(props) {
    const classes = styles(props);
    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="EMAIL SUPPORT" secondary="help@buynbulk.com" classes={{secondary: classes.listItemText}} />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="PHONE SUPPORT" secondary="08067835738, 09075762658" classes={{secondary: classes.listItemText}} />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem>
                        <ListItemText primary="GET LATEST DEALS" secondary={<SearchBox />} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Contacts
