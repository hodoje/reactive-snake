import React from 'react';

import classes from './RangeSlider.module.css';
import Aux from '../../hoc/Auxiliary';

const RangeSlider = (props) => {

    const { background, labels, min, max, step, width, height, initialValue, onChange } = props;

    return (
        <div className={classes.SlideContainer}>
            <div 
                className={classes.SliderLabels}
                style={
                    {
                        width: width
                    }
                }>
                <Aux>
                    {labels.map(l => <span key={l}>{l}</span>)}
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
                style={
                    {
                        background: background,
                        width: width,
                        height: height
                    }
                }/>
        </div>
    );
};

export default RangeSlider;