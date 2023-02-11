import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducer'

// const composeEnhancers =
//     typeof window === 'object' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;

const composeEnhancers =
    (__DEV__ &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const store = createStore(appReducer, enhancer);



export default store