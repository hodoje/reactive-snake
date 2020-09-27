import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Game.module.css';

import Snake from '../../containers/Snake/Snake';
import Summary from '../../components/Summary/Summary';

const Game = () => {

    const gameOver = useSelector(state => state.gameOver);
    const initialLoad = useSelector(state => state.initialLoad);
    const currentScore = useSelector(state => state.currentScore);
    const highscore = useSelector(state => state.highscore);
    const isNewHighscore = useSelector(state => state.isNewHighscore);

    let summary = null;

    if (gameOver) {
        summary = <Summary gameOver={gameOver} initialLoad={initialLoad} currentScore={currentScore} highscore={highscore} isNewHighscore={isNewHighscore}/>
    }

    return (
        <div className={classes.Game}>
            {summary}
            <Snake gameOver={gameOver} initialLoad={initialLoad}/>
        </div>
    );
};

export default Game;