import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Menu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actions/actions';

const Menu = () => {
    
    const gameOver = useSelector(state => state.gameOver);

    const dispatch = useDispatch();

    const buttonClasses = [classes.Button];
    if (!gameOver) {
        buttonClasses.push(classes.DisabledButton);
    }

    const startGame = () => {
        dispatch(actions.startGame());
    }

    return (
        <div className={classes.Menu}>
            <FontAwesomeIcon icon={faPlay} className={buttonClasses.join(' ')} onClick={startGame}/>
        </div>
    )
}

export default Menu;