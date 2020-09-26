import * as actionTypes from './actionTypes';

export const startGame = () => {
    return {
        type: actionTypes.START_GAME
    };
}

export const endGame = () => {
    return {
        type: actionTypes.END_GAME
    };
}

export const ateFood = () => {
    return {
        type: actionTypes.ATE_FOOD
    };
}

export const ateBonusFood = () => {
    return {
        type: actionTypes.ATE_BONUS_FOOD
    };
}

export const setSpeed = (action) => {
    return {
        type: actionTypes.SET_SPEED,
        mode: action.mode
    };
}

export const setWalls = (action) => {
    return {
        type: actionTypes.SET_WALLS,
        mode: action.mode
    };
}