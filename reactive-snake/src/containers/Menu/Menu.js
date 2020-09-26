import React from 'react';

import classes from './Menu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {

    const play = () => {
        
    }

    return (
        <div className={classes.Menu}>
            <FontAwesomeIcon icon={faPlay} className={classes.Button} onClick={play}/>
        </div>
    )
}

export default Menu;