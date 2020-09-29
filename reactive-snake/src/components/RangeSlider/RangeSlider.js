import React from 'react';

import classes from './RangeSlider.module.css';
import Aux from '../../hoc/Auxiliary';

const RangeSlider = (props) => {

    const { background, labels, min, max, step, width, height, initialValue, onChange } = props;

    const style = {
        background: background,
        width: width,
        height: height,
        boxShadow: `0 0 10px ${background}`,
    }

    return (
        <div className={classes.SlideContainer}>
            <div 
                className={classes.SliderLabelsContainer}
                style={
                    {
                        width: width
                    }
                }>
                <Aux>
                    {labels.map(l => <span key={l} className={classes.SliderLabel}>{l}</span>)}
                </Aux>
            </div>
            <input 
                type="range" 
                min={min}
                max={max}
                step={step}
                className={classes.Slider}
                defaultValue={initialValue}
                onChange={onChange}
                style={style}/>
        </div>
    );
};

export default RangeSlider;