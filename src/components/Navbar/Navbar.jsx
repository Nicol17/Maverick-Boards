import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeIcon from '@material-ui/icons/Home';

import logo from '../../assets/danger.svg';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    


    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="45px" className={classes.image} />
                    Maverick Boards
                </Typography>
                <ul className={classes.list}>
                <li  className={classes.listItem}><Link to="/" style={{ textDecoration: 'none' }}><span className={classes.icon}><HomeIcon />Home</span></Link></li>

                <li className={classes.listItem}><Link to="/products" style={{ textDecoration: 'none' }}><span className={classes.icon}><StorefrontIcon />Products</span></Link></li>
            </ul>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar