import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { speedSettings, wallSettings, canvasSettings, gameModes } from '../../shared/gameSettings';
import SnakeClass from '../../shared/snake';

const initialState = {
    gameOver: true,
    initialLoad: false,
    speed: speedSettings.easy,
    walls: wallSettings.easy,
    bonusFoodPercent: speedSettings.easy.speed + wallSettings.easy.walls,
    currentScore: 0,
    highscore: 0,
    isNewHighscore: false,
    snake: new SnakeClass(canvasSettings.canvasWidth, canvasSettings.canvasHeight, canvasSettings.scale)    
}

const startGame = (state, action) => {
    state.snake.restart();
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
    const bonusPoints = points + (state.speed.points + state.walls.points) * 0.5;
    const newPoints = state.currentScore + bonusPoints;
    return updateObject(state, {
        currentScore: newPoints
    });
}

const setSpeed = (state, action) => {
    let difficulty;

    switch (action.mode) {
        case gameModes.easy:
            difficulty = speedSettings.easy;
            break;
        case gameModes.medium:
            difficulty = speedSettings.medium;
            break;
        case gameModes.hard:
            difficulty = speedSettings.hard;
            break;
        default:
            difficulty = state.speed;
            break;
    }

    return updateObject(state, {
        speed: difficulty
    });
}

const setWalls = (state, action) => {
    let difficulty;

    switch (action.mode) {
        case gameModes.easy:
            difficulty = wallSettings.easy;
            break;
        case gameModes.medium:
            difficulty = wallSettings.medium;
            break;
        case gameModes.hard:
            difficulty = wallSettings.hard;
            break;
        default:
            difficulty = state.walls;
            break;
    }

    return updateObject(state, {
        walls: difficulty
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
        default: return state;
    }
}

export default reducer;