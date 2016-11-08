import Helpers from '../../helpers';
import {
	LOADING_START,
	LOADING_FINISHED
} from './action-types';


const INITIAL_STATE = { loading: true };

// export const loadingReducer = Helpers.createReducers(INITIAL_STATE, {
// 	[LOADING_START](state, { loading }){
// 		return { ...state, loading }
// 	},

// 	[LOADING_FINISHED](state, { loading }){
// 		return { ...state, loading }
// 	}
// })

export function loadingReducer(state = INITIAL_STATE, action){
	Helpers.cLog([
	'loadingReducer\'s action =>',
	action,
	'loadingReducer\'s action.type =>',
	action.type
	])
	switch(action.type){
		case LOADING_START:
			console.log(action.type)
			return {
				...state,
				loading: action.loading
			}
		case LOADING_FINISHED:
			return {
				...state,
				loading: action.loading
			}
		default:
			return state;
	}
}