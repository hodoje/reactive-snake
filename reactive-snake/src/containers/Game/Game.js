import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Game.module.css';

import Snake from '../../containers/Snake/Snake';
import Menu from '../../containers/Menu/Menu';

const Game = () => {

    const gameOver = useSelector(state => state.game.gameOver);

    let menu = null;
    if (gameOver) {
        menu = <Menu />
    }

    return (
        <div className={classes.Game}>
            {menu}
            <Snake />
        </div>
    );
};

export default Game;