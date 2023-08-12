import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {
                results: state.results.concat({
                    id: new Date(),
                    // value: action.result * 2
                    value: action.result
                })
            });
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            console.log("updatedArray :  ",updatedArray);
            return updateObject(state, {
                results: updatedArray
            });
    }
    return state;
};

export default reducer;
