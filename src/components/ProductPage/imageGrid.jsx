import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const ImageGrid = ({ images, onSelect, selectedImage }) => {
    const classes = useStyles();
    return (
    <Grid container>
        {images.map((image, index) => <img className={classes.img} onClick={()=> onSelect(index)} src={image} height={250} style={{ border: index=== selectedImage ? 'solid 1px #000' : 'solid 1px #eee'}}/>)}
    </Grid>
        )
}

export default ImageGrid;