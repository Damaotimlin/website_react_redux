import { createReducer } from '../../helpers';
import {
	START,
	COMPLETE
} from './action-types';


const INITIAL_STATE = { isLoading: true };

export default createReducer(INITIAL_STATE, {
	[START](state, { isLoading }){
		return { ...state, isLoading }
	},

	[COMPLETE](state, { isLoading }){
		return { ...state, isLoading }
	}
})

// export default loadingReducer;