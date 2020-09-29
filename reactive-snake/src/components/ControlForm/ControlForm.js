import React, { useRef, useEffect } from 'react';
import { reversedKeyboard } from '../../shared/utility';

import classes from './ControlForm.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ControlForm = (props) => {
    const { control, direction, onAssignKey } = props;
    const buttonRef = useRef(null);
    const setButtonControl = (control) => {
        buttonRef.current.innerHTML = reversedKeyboard.keys[control];
    }

    const handleInput = (event) => {
        setButtonControl(event.keyCode);
        onAssignKey(event.keyCode);
    }

    useEffect(() => {
        setButtonControl(control);
    }, [control]);

    return (
        <div className={classes.Form}>
            <FontAwesomeIcon icon={direction} className={classes.Direction}/>
            <button ref={buttonRef} className={classes.Button} onKeyDown={handleInput}></button>
        </div>
    );
};

export default ControlForm;