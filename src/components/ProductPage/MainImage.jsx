import React from 'react';
import useStyles from './styles';

const MainImage = ({ src }) => {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.MainImage} src={src}/>
        </div>
    )
}

export default MainImage;