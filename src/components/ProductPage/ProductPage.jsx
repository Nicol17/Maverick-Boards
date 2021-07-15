import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import ImageGrid from './imageGrid';
import MainImage from './MainImage';
import Info from './Info';

import useStyles from './styles';

const images = ['https://images.unsplash.com/photo-1537519646099-335112f03225?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'];

// const product = {
//     title: 'surfboard',
//     description: 'this is a surfboard',
//     price: 43.33,
//     category: 'BOARD'
// };

const ProductPage = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const [selectedImage, setSelectedImage] = useState(0);
    return (
        <div>
            <Grid className={classes.container} container spacing={1}>
                <Grid item sm={1}>
                    <ImageGrid product={product} images={images} onSelect={setSelectedImage} selectedImage={selectedImage}/>
                </Grid>

                <Grid item sm={5}>
                    <MainImage product={product} src={images[selectedImage]}/>
                </Grid>

                <Grid item sm={6}>
                <Info {...product}/>
                </Grid>
            </Grid>
        </div>
    )
}


export default ProductPage;