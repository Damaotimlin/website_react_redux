import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import { routerReducer } from 'react-router-redux';

import loadingReducer from './loading/reducer';
import navigationReducer from './navigation/reducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  loadingStatus: loadingReducer,
  navigation: navigationReducer
});

export default rootReducer
