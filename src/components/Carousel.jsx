import React from 'react';

import Carousel from 'react-material-ui-carousel';

import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    carouselItem: {
        backgroundColor: theme.palette.background.paper,
        color: '#14A800',
        textAlign: 'center',
        padding: '10px 0'
    }
}))

function Item({carouselItem, item}) {
    return (
        <div>
            <h2 className={carouselItem}>{item.description}</h2>
        </div>
    )
}

function CarouselElement(props) {
    const classes = useStyles(props)
    const items = [
        {
            name: "Random Name #1",
            description: "Spend less! Buy more, Save more"
        },
        {
            name: "Random Name #2",
            description: "Bulk buying is best for you"
        },
        {
            name: "Random Name #2",
            description: "Direct foods from the producers"
        }
    ]

    return (
        <Grid item xs={12}>
            <Carousel
                nextIcon={false}
                prevIcon={false}
                indicators={false}
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} {...classes} /> )
                }
            </Carousel>
        </Grid>
    )
}

export default CarouselElement
