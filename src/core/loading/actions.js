import Helpers from '../../helpers'
import {
	LOADING_START,
	LOADING_FINISHED,
	LOADING_ERROR
} from './action-types';

export const start = () => {
	// return {
	// 	type: LOADING_START,
	// 	loading: true
	// }
	Helpers.activeAction({
		LOADING_START: { loading: true }
	})
	dispatch => {	
		Helpers.createDispatchers({
			LOADING_START: { loading: true }
		});
	}
};

export const finished = () => {
	// return {
	// 	type: LOADING_START,
	// 	loading: false
	// }
	Helpers.activeAction({
		LOADING_FINISHED: { loading: false }
	})
};

export const error = error => {
	dispatch => {	
		Helpers.createDispatchers({
			LOADING_ERROR: error
		});
	}
};