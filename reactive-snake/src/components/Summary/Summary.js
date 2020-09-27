import React from 'react';

import classes from './Summary.module.css';
import Aux from '../../hoc/Auxiliary';

const Summary = (props) => {

    const { gameOver, initialLoad, currentScore, highscore, isNewHighscore } = props;
    const classList = [classes.Summary];

    const initialScreen = (
        <Aux>
            <h1 className={classes.Heading}>Snake Game</h1>
            <h4 className={classes.Instruction}>Press the play button to start!</h4>
        </Aux>
    );

    let displayHighscore = <p className={classes.Highscore}>Best score: {highscore}</p>;
    if (isNewHighscore) {
        displayHighscore = (
            <Aux>
                <span className={classes.NewHighscore}>New!</span>
                &nbsp;
                <p className={classes.Highscore}>Best score: {highscore}</p>;
            </Aux>
        );
    }

    let display = null;

    if (!initialLoad) {
        display = initialScreen;
        classList.push(classes.SummaryOut);
    }
    else {
        if (gameOver) {
            classList.push(classes.SummarySlideOut);
            display = (
                <Aux>
                    <p className={classes.CurrentScore}>{currentScore}</p>
                    {displayHighscore}
                </Aux>
            );
        }
    }

    return (
        <div className={classList.join(' ')}>
            {display}
        </div>
    );
};

export default Summary;