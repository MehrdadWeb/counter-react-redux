import * as actionTypes from './actionTypes';

//storeResult  is ActionCreator
export const storeResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
} 

// redux-thunk
//saveResult  is ActionCreator
/* export const saveResult = ( res ) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
} 
//redux-thunk
//storeResult is thunk function which returns a function(ActionCreator) instead of  action
export const storeResult = ( res ) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000 );
    }
}; */

//deleteResult  is ActionCreator
export const deleteResult = ( resElId ) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};