import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import { routerReducer } from 'react-router-redux';
import ViewStatusReducer from './view_status';
import UserStatusReducer from './user_status';

// import redux-form and grab reducer property and set it as variable formReducer

const rootReducer = combineReducers({
  routing: routerReducer,
  viewStatus: ViewStatusReducer,
  userStatus: UserStatusReducer,
});

export default rootReducer;
