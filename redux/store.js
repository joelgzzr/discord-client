import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState = {}) => createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;