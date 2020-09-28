import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Game.module.css';

import Snake from '../../containers/Snake/Snake';
import Menu from '../../containers/Menu/Menu';

const Game = () => {

    const gameOver = useSelector(state => state.gameOver);
    const initialLoad = useSelector(state => state.initialLoad);
    const currentScore = useSelector(state => state.currentScore);
    const highscore = useSelector(state => state.highscore);
    const isNewHighscore = useSelector(state => state.isNewHighscore);
    const speedGameMode = useSelector(state => state.speedGameMode);
    const wallsGameMode = useSelector(state => state.wallsGameMode);

    let menu = null;

    if (gameOver) {
        menu = <Menu 
            gameOver={gameOver} 
            initialLoad={initialLoad} 
            currentScore={currentScore} 
            highscore={highscore} 
            isNewHighscore={isNewHighscore}
            speedGameMode={speedGameMode}
            wallsGameMode={wallsGameMode}/>
    }

    return (
        <div className={classes.Game}>
            {menu}
            <Snake gameOver={gameOver} initialLoad={initialLoad}/>
        </div>
    );
};

export default Game;