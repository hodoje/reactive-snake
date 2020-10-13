import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../../containers/Menu/Menu';
import Snake from '../../containers/Snake/Snake';
import classes from './Game.module.css';

const Game = () => {
    const gameOver = useSelector(state => state.game.gameOver);
    
    return (
        <div className={classes.Game}>
            {gameOver && <Menu/>}
            <Snake />
        </div>
    );
};

export default Game;