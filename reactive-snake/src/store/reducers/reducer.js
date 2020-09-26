import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { gameModes } from '../../shared/gameModes';

const speedSettings = Object.freeze(
    {
        easy: {
            speed: 10,
            points: 50
        },
        medium: {
            speed: 13,
            points: 100
        },
        hard: {
            speed: 15,
            points: 150
        }
    }
);

const wallSettings = Object.freeze(
    {
        easy: {
            walls: 0,
            points: 100
        },
        medium: {
            walls: 10,
            points: 150
        },
        hard: {
            walls: 20,
            points: 200
        }
    }
);

const initialState = {
    gameOver: true,
    speed: speedSettings.easy,
    walls: wallSettings.easy,
    bonusFoodPercent: speedSettings.easy.speed + wallSettings.easy.walls,
    currentScore: 0,
    highscore: 0,
    isNewHighscore: false
}

const startGame = (state, action) => {
    return updateObject(state, {
        gameOver: false
    });
}

const endGame = (state, action) => {
    const highscore = state.currentScore > state.highscore ? state.currentScore : state.highscore;
    const isNewHighscore = state.currentScore > state.highscore ? true : false;
    return updateObject(state, {
        gameOver: false,
        highscore: highscore,
        isNewHighscore: isNewHighscore
    });
}

const ateFood = (state, action) => {
    const points = state.speed.points + state.walls.points;
    const newPoints = state.currentScore + points;
    return updateObject(state, {
        currentScore: newPoints
    });
}

const ateBonusFood = (state, action) => {
    const bonusPoints = (state.speed.points + state.walls.points) * 0.5;
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
        case actionTypes.ATE_FOOD: return ateFood(state, action);
        case actionTypes.ATE_BONUS_FOOD: return ateBonusFood(state, action);
        case actionTypes.SET_SPEED: return setSpeed(state, action);
        case actionTypes.SET_WALLS: return setWalls(state, action);
        default: return state;
    }
}

export default reducer;