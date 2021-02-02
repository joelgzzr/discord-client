import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const makeStore = () => createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper;