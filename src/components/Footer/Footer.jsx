import React from 'react';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styles'; 


const Footer = () => {

    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <ul className={classes.list}>
                <li  className={classes.listItem}><Link to="/" style={{ textDecoration: 'none' }}><span className={classes.icon}><HomeIcon />Home</span></Link></li>

                <li className={classes.listItem}><Link to="/products" style={{ textDecoration: 'none' }}><span className={classes.icon}><StorefrontIcon />Products</span></Link></li>
            </ul>
            <span>Designed & Developed by Nicol Lluesa&#169;. All rights reserved.</span>
        </footer>
    )
}

export default Footer;

