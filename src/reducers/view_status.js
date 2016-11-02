import { createReducer } from '../helpers/create_reducer';
import { 
	VIEW_LOADING 
} from '../actions/index';

const INITIAL_STATE = { loading: false };

// export default (state = INITIAL_STATE, { type, payload }) => {
// 	switch(type) {
// 		case VIEW_LOADING:
// 			return { // ...state === copy current state and return a new obj
// 				...state, // ! NEVER mutate state ! copy instead
// 				loading: payload // add all: into current state
// 			};

// 		default:
// 			return state;
// 	}
// }
export default createReducer(INITIAL_STATE, {
	[VIEW_LOADING](state, { loading }){
		return { ...state, loading }
	}
})