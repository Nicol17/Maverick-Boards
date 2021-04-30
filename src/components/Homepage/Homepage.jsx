import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, Button, Typography } from '@material-ui/core';
import Video from '../../assets/Overture Noah Beschen & Makana Pang RVCA Surf Samoa_Trim.mp4'; 

import useStyles from './styles';

const Homepage = () => {

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline />
            <video className={classes.video} autoPlay loop muted>
                <source src={Video} type="video/mp4"/>
            </video>
            <div className={classes.hero}>
                <Typography variant="h1" className={classes.heroText}>Find the perfect board for every <span className={classes.heroColor}>Adventure</span>...</Typography>
                <Button className={classes.button} component={Link} to="/products" type="button">Go to the store!</Button>
            </div>

        </div>
    )
}

export default Homepage;