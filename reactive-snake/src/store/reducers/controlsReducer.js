import * as actionTypes from '../actions/actionTypes';
import { updateObject, keyboard } from '../../shared/utility';

const initialState = {
    upControl: keyboard.keys.UP_ARROW,
    downControl: keyboard.keys.DOWN_ARROW,
    leftControl: keyboard.keys.LEFT_ARROW,
    rightControl: keyboard.keys.RIGHT_ARROW
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
        case actionTypes.SET_UP_CONTROL: return setUpControl(state, action);
        case actionTypes.SET_DOWN_CONTROL: return setDownControl(state, action);
        case actionTypes.SET_LEFT_CONTROL: return setLeftControl(state, action);
        case actionTypes.SET_RIGHT_CONTROL: return setRightControl(state, action);
        default: return state;
    }
}

export default reducer;