import * as actionTypes from './actionTypes';

//increment  is ActionCreator
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};
//decrement  is ActionCreator
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};
//add  is ActionCreator
export const add = ( value ) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};
//subtract  is ActionCreator
export const subtract = ( value ) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};