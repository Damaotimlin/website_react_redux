import { createReducer } from '../../helpers';
import {
	NAVBAR_ITEM,
	BURGER_BTN_CLICKED
} from './action-types';

const INITIAL_STATE = { isClicked: false, navItem: {} };

export default createReducer(INITIAL_STATE, {
	[NAVBAR_ITEM](state, { navItem }){
		return { ...state, navItem }
	},

	[BURGER_BTN_CLICKED](state, { isClicked }){
		return { ...state, isClicked }
	},
})