import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import { routerReducer } from 'react-router-redux';

import loadingReducer from './loading/reducer';

// import redux-form and grab reducer property and set it as variable formReducer

const rootReducer = combineReducers({
  routing: routerReducer,
  loadingView: loadingReducer
});

export default rootReducer;
