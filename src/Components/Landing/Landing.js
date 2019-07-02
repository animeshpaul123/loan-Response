import React from 'react';
import classes from './Landing.module.css';
import undraw from '../../images/undraw.svg';

const landing = () => {
    return (
        <div className={classes.landing}>
            <p className={classes.dark}>your personal</p>
            <p className={classes.light}>loaning app</p>
            <div className={classes.img}><img src={undraw} alt="img"/></div>
        </div>
    )
}

export default landing;