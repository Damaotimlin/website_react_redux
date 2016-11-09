import {
	START,
	COMPLETE,
	ERROR,
	PROGRESS
} from './action-types';

export function loadingStart(){
	return (dispatch) => {
		dispatch({		
			type: START,
			isLoading: true
		});

		// setTimeout(error({error: 'ERROR:Loading Start Timeout @loadion/action'}), 1000)
	}
};

export function loadingComplete(){
	return (dispatch) => {
		dispatch({
			type: COMPLETE,
			isLoading: false
		});
	}
};

export const getLoadingProgress = () => {
	return dispatch => {
    dispatch({
    	type: PROGRESS,
    	progress: progress
		})
  }
};

function loadingError(error){
	dispatch => {	
		dispatch({
			type:ERROR,
			error
		});
	}
};