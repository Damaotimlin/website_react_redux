import { createReducer } from '../../helpers';
import {
	NAVBAR_ITEM,
	BURGER_BTN_CLICKED
} from './action-types';

const INITIAL_STATE = { burgerClicked: false, navItem: {} };

export default createReducer(INITIAL_STATE, {
	[NAVBAR_ITEM](state, { navItem }){
		return { ...state, navItem }
	},

	[BURGER_BTN_CLICKED](state, { burgerClicked }){
		return { ...state, burgerClicked }
	},
})