import React from 'react';

/* custom */

/* material-ui */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    searchInput: {
        width: '200px',
        outline: '0px',
        padding: '10px 15px'
    },
    subscribeButton: {
        padding: '8px 15px',
        borderRadius: '0'
    }
}))



function SearchBox(props) {
    const classes = useStyles(props)
    return (
        <div style={{width: '100%'}}>
            <Box>
                <input className={classes.searchInput} placeholder="Email Address"></input>
                <Button variant="contained" className={classes.subscribeButton}>Subscribe</Button>
                {/* <ButtonGroup color="primary" aria-label="outlined primary button group">
                </ButtonGroup> */}
            </Box>
        </div>
    )
}

export default SearchBox
