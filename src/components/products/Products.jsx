import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

// import { connect } from 'react-redux';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
};

// const mapStateToProps = state => {
//     return {
//         products: state.shop.products,
//     };
// };

// export default connect(mapStateToProps)(Products);

export default Products;