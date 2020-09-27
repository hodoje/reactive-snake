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

export const eatFood = () => {
    return {
        type: actionTypes.EAT_FOOD
    };
}

export const eatBonusFood = () => {
    return {
        type: actionTypes.EAT_BONUS_FOOD
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