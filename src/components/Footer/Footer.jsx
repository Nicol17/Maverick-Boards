import React from 'react';

import useStyles from './styles'; 


const Footer = () => {

    const classes = useStyles();
    return(
        <footer className={classes.footer}>
        Designed & Developed by Nicol Lluesa&#169;. All rights reserved.
        </footer>
    )
}

export default Footer;

