import {
	INIT_AUTH,
	SIGN_IN_ERROR,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS
} from '../actions/index';

const INITIAL_STATE = {
	signIn: false,
}

export default (state = INITIAL_STATE, { type, payload }) => {
	switch(type){
		case SIGN_IN_SUCCESS:
			console.log('User Sign In Success')
			return {
				...state,
				signIn: payload
			};

		default:
			return state;
	}

}