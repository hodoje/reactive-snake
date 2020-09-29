import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Menu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actions/actions';
import Aux from '../../hoc/Auxiliary';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import { gameModes } from '../../shared/gameSettings';
import ControlForm from '../../components/ControlForm/ControlForm';
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Menu = (props) => {
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
    const dispatch = useDispatch();
    
    const startGame = () => {
        dispatch(actions.startGame());
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

    // Play button setup
    const buttonClasses = [classes.Button];
    if (!gameOver) {
        buttonClasses.push(classes.DisabledButton);
    }

    // Is highscore or not
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
    
    let display = null;
    // On load display
    const initialDisplay = <h1 className={[classes.Heading, classes.WhiteText, classes.NoSelect].join(' ')}>Snake Game</h1>;
    // On game over display
    const gameOverDisplay = (
        <Aux>
            <p className={[classes.CurrentScore, classes.WhiteText, classes.NoSelect].join(' ')}>{currentScore}</p>
            {displayHighscore}
        </Aux>
    );

    // On load or game over style
    const classList = [classes.Menu];
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

    const onLeftControlSubmit = (key) => {
        dispatch(actions.setLeftControl(key));
    }

    const onUpControlSubmit = (key) => {
        dispatch(actions.setUpControl(key));
    }

    const onRightControlSubmit = (key) => {
        dispatch(actions.setRightControl(key));
    }

    const onDownControlSubmit = (key) => {
        dispatch(actions.setDownControl(key));
    }

    const leftControlForm = <ControlForm control={leftControl} direction={faArrowLeft} onAssignKey={onLeftControlSubmit}/>;
    const upControlForm = <ControlForm control={upControl} direction={faArrowUp} onAssignKey={onUpControlSubmit}/>;
    const rightControlForm = <ControlForm control={rightControl} direction={faArrowRight} onAssignKey={onRightControlSubmit}/>;
    const downControlForm = <ControlForm control={downControl} direction={faArrowDown} onAssignKey={onDownControlSubmit}/>;

    return (
        <div className={classList.join(' ')}>
            <div>
                {display}
            </div>
            <div>
                <h3 className={[classes.WhiteText, classes.NoSelect].join(' ')}>Controls</h3>
                <div className={classes.Controls}>
                    {leftControlForm}
                    {upControlForm}
                    {rightControlForm}
                    {downControlForm}
                </div>
            </div>
            <div>
                <h3 className={[classes.WhiteText, classes.NoSelect].join(' ')}>Difficulty</h3>
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