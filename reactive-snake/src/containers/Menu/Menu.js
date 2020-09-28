import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './Menu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actions/actions';
import Aux from '../../hoc/Auxiliary';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import { gameModes } from '../../shared/gameSettings';

const Menu = (props) => {
    const { 
        gameOver, 
        initialLoad, 
        currentScore, 
        highscore, 
        isNewHighscore,
        speedGameMode,
        wallsGameMode
    } = props;
    const dispatch = useDispatch();

    const buttonClasses = [classes.Button];
    if (!gameOver) {
        buttonClasses.push(classes.DisabledButton);
    }

    const startGame = () => {
        dispatch(actions.startGame());
    }

    const classList = [classes.Menu];

    let display = null;
    const initialDisplay = <h1 className={[classes.Heading, classes.WhiteText, classes.NoSelect].join(' ')}>Snake Game</h1>;
    
    let displayHighscore = <p className={[classes.Highscore, classes.WhiteText, classes.NoSelect].join(' ')}>Best score: {highscore}</p>;
    if (isNewHighscore) {
        displayHighscore = (
            <Aux>
                <span className={[classes.NewHighscore, classes.NoSelect].join(' ')}>New!</span>
                &nbsp;
                <p className={[classes.Highscore, classes.WhiteText, classes.NoSelect].join(' ')}>Best score: {highscore}</p>;
            </Aux>
        );
    }

    const gameOverDisplay = (
        <Aux>
            <p className={[classes.CurrentScore, classes.WhiteText, classes.NoSelect].join(' ')}>{currentScore}</p>
            {displayHighscore}
        </Aux>
    );

    if (!initialLoad) {
        display = initialDisplay;
        classList.push(classes.MenuOut);
    }
    else {
        if (gameOver) {
            classList.push(classes.MenuSlideOut);
            display = gameOverDisplay;
        }
    }

    const onSpeedChange = (event) => {
        const speedModePick = event.target.value;
        let mode;

        if (+speedModePick === gameModes.easy.value) {
            mode = gameModes.easy;
        }
        else if (+speedModePick === gameModes.medium.value) {
            mode = gameModes.medium;
        }
        else {
            mode = gameModes.hard;
        }
        
        dispatch(actions.setSpeed(mode));
    }

    const onWallsChange = (event) => {
        const wallsModePick = event.target.value;
        let mode;

        if (+wallsModePick === gameModes.easy.value) {
            mode = gameModes.easy;
        }
        else if (+wallsModePick === gameModes.medium.value) {
            mode = gameModes.medium;
        }
        else {
            mode = gameModes.hard;
        }

        dispatch(actions.setWalls(mode));
    }

    return (
        <div className={classList.join(' ')}>
            <div>
                {display}
            </div>
            <div>
                <h4 className={[classes.WhiteText, classes.NoSelect].join(' ')}>Speed</h4>
                <RangeSlider 
                    background="rgb(147,255,25)" 
                    labels={['easy', 'medium', 'hard']}
                    width="300px" 
                    height="6px" 
                    min="1" 
                    max="3" 
                    step="1" 
                    initialValue={speedGameMode.value} 
                    onChange={onSpeedChange}/>
                <br/>
                <h4 className={[classes.WhiteText, classes.NoSelect].join(' ')}>Walls</h4>
                <RangeSlider 
                    background="rgb(255,0,128)" 
                    labels={['easy', 'medium', 'hard']}
                    width="300px" 
                    height="6px" 
                    min="1" 
                    max="3" 
                    step="1" 
                    initialValue={wallsGameMode.value} 
                    onChange={onWallsChange}/>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlay} className={buttonClasses.join(' ')} onClick={startGame}/>
            </div>
        </div>
    );
};

export default Menu;