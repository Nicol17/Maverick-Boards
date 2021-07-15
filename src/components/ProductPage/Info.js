import React from 'react';
import { Grid, Typography, Divider, Button, Box } from '@material-ui/core';
import useStyles from './styles';


const Info = ( { title, description, price, category }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.infoContainer} container direction="column">
            <Typography variant="subtitle1">{category}</Typography>
            <Divider />
            <Box mt={2}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="subtitle1">{description}</Typography>
                <Typography variant="h5">$ {price}</Typography>
            </Box>
            <Button className={classes.productPageButton} variant="contained" color="primary">Add to Cart</Button>
        </Grid>
    )
}

export default Info;