import * as actionTypes from '../actions/actionTypes';
import { updateObject, keyboard } from '../../shared/utility';
import { speedSettings, wallSettings, gameModes } from '../../shared/gameSettings';

const initialState = {
    gameOver: true,
    initialLoad: false,
    speed: speedSettings.easy,
    walls: wallSettings.easy,
    speedGameMode: gameModes.easy,
    wallsGameMode: gameModes.easy,
    bonusFoodPercent: speedSettings.easy.speed + wallSettings.easy.walls,
    currentScore: 0,
    highscore: 0,
    isNewHighscore: false,
    upControl: keyboard.keys.UP_ARROW,
    downControl: keyboard.keys.DOWN_ARROW,
    leftControl: keyboard.keys.LEFT_ARROW,
    rightControl: keyboard.keys.RIGHT_ARROW
}

const startGame = (state, action) => {
    return updateObject(state, {
        gameOver: false,
        currentScore: 0,
        isNewHighscore: false,
        initialLoad: true        
    });
}

const endGame = (state, action) => {
    const highscore = state.currentScore > state.highscore ? state.currentScore : state.highscore;
    const isNewHighscore = state.currentScore > state.highscore ? true : false;
    return updateObject(state, {
        gameOver: true,
        highscore: highscore,
        isNewHighscore: isNewHighscore
    });
}

const eatFood = (state, action) => {
    const points = state.speed.points + state.walls.points;
    const newPoints = state.currentScore + points;
    return updateObject(state, {
        currentScore: newPoints
    });
}

const eatBonusFood = (state, action) => {
    const points = state.speed.points + state.walls.points;
    const bonusPoints = points + Math.floor((state.speed.points + state.walls.points) * 0.5);
    const newPoints = state.currentScore + bonusPoints;
    return updateObject(state, {
        currentScore: newPoints
    });
}

const setSpeed = (state, action) => {
    let speed;
    let speedGameMode;

    switch (action.mode) {
        case gameModes.easy:
            speed = speedSettings.easy;
            speedGameMode = gameModes.easy
            break;
        case gameModes.medium:
            speed = speedSettings.medium;
            speedGameMode = gameModes.medium
            break;
        case gameModes.hard:
            speed = speedSettings.hard;
            speedGameMode = gameModes.hard
            break;
        default:
            speed = state.speed;
            speedGameMode = state.speedGameMode
            break;
    }

    return updateObject(state, {
        speed: speed,
        speedGameMode: speedGameMode
    });
}

const setWalls = (state, action) => {
    let walls;
    let wallsGameMode;

    switch (action.mode) {
        case gameModes.easy:
            walls = wallSettings.easy;
            wallsGameMode = gameModes.easy;
            break;
        case gameModes.medium:
            walls = wallSettings.medium;
            wallsGameMode = gameModes.medium;
            break;
        case gameModes.hard:
            walls = wallSettings.hard;
            wallsGameMode = gameModes.hard;
            break;
        default:
            walls = state.walls;
            wallsGameMode = state.wallsGameMode
            break;
    }

    return updateObject(state, {
        walls: walls,
        wallsGameMode: wallsGameMode
    });
}

const setUpControl = (state, action) => {
    return updateObject(state, {
        upControl: action.control
    });
}

const setDownControl = (state, action) => {
    return updateObject(state, {
        downControl: action.control
    });
}

const setLeftControl = (state, action) => {
    return updateObject(state, {
        leftControl: action.control
    });
}

const setRightControl = (state, action) => {
    return updateObject(state, {
        rightControl: action.control
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_GAME: return startGame(state, action);
        case actionTypes.END_GAME: return endGame(state, action);
        case actionTypes.EAT_FOOD: return eatFood(state, action);
        case actionTypes.EAT_BONUS_FOOD: return eatBonusFood(state, action);
        case actionTypes.SET_SPEED: return setSpeed(state, action);
        case actionTypes.SET_WALLS: return setWalls(state, action);
        case actionTypes.SET_UP_CONTROL: return setUpControl(state, action);
        case actionTypes.SET_DOWN_CONTROL: return setDownControl(state, action);
        case actionTypes.SET_LEFT_CONTROL: return setLeftControl(state, action);
        case actionTypes.SET_RIGHT_CONTROL: return setRightControl(state, action);
        default: return state;
    }
}

export default reducer;