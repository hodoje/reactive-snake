import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Game.module.css';

import Snake from '../../containers/Snake/Snake';
import Menu from '../../containers/Menu/Menu';

const Game = () => {

    const gameOver = useSelector(state => state.game.gameOver);
    const initialLoad = useSelector(state => state.game.initialLoad);
    const currentScore = useSelector(state => state.game.currentScore);
    const highscore = useSelector(state => state.game.highscore);
    const isNewHighscore = useSelector(state => state.game.isNewHighscore);
    const speedGameMode = useSelector(state => state.game.speedGameMode);
    const wallsGameMode = useSelector(state => state.game.wallsGameMode);
    const leftControl = useSelector(state => state.controls.leftControl);
    const upControl = useSelector(state => state.controls.upControl);
    const rightControl = useSelector(state => state.controls.rightControl);
    const downControl = useSelector(state => state.controls.downControl);

    let menu = null;

    if (gameOver) {
        menu = <Menu 
            gameOver={gameOver} 
            initialLoad={initialLoad} 
            currentScore={currentScore} 
            highscore={highscore} 
            isNewHighscore={isNewHighscore}
            speedGameMode={speedGameMode}
            wallsGameMode={wallsGameMode}
            leftControl={leftControl}
            upControl={upControl}
            rightControl={rightControl}
            downControl={downControl}/>
    }

    return (
        <div className={classes.Game}>
            {menu}
            <Snake />
        </div>
    );
};

export default Game;