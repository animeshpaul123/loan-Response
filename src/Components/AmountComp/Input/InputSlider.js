import React from 'react';
import classes from './InputSlider.module.css';

const inputSlider = (props) => (
    <div className={classes.InputSlider}>
        <p className={classes.para}>{props.children}</p>
        <div className={classes.InputContainer}>
            <span>{props.mined}</span>
            <input type={props.typed} 
            min={props.mined} 
            max={props.maxed} 
            className={classes.Slide}
            step={props.steped}
            value={props.value}
            onChange={props.changed}/>
            <span>{props.maxed}</span>
        </div>
    </div>
)

export default inputSlider;