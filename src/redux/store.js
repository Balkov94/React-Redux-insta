import { legacy_createStore } from 'redux';
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer.js';
// Redux_DEV_tool
import { composeWithDevTools } from 'redux-devtools-extension';

// all slices
const rootReducer = combineReducers({
     userData: userReducer,

 });

 export {rootReducer};


 //Store
const store = legacy_createStore(
     rootReducer,
     composeWithDevTools(),
     );

export {store};

