import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { createStore } from 'redux';
//import { createStore, combineReducers } from 'redux';
//import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer, // ctr = {counter} =>> state.ctr.counter
    res: resultReducer // res= {results} =>> state.res.results
    //this state is the state in store(in redux),the state of redux
});
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next State', store.getState());
            return result;
        }
    }
}; 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
// const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware());
//const store = createStore(reducer, applyMiddleware(logger));
//const store = createStore(reducer);
// const store = createStore(rootReducer);

//The store is in redux passed as props to components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
