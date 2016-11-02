import { createReducer } from '../helpers/create_reducer';
import { Record } from 'immutable';
import {
	INIT_AUTH,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS
} from '../actions/index';

const AuthState = new Record({
	authenticated: false,
	id: null
});

export default createReducer(new AuthState, {
	[INIT_AUTH](state, { user }){
		return { ...state, user }
	},
	[SIGN_IN_SUCCESS](state, { signInUser }){
		return {
			...state,
			authenticated: Boolean(signInUser),
			id: signInUser.uid
		}
	},
	[SIGN_OUT_SUCCESS](state, { }){
		return new AuthState()
	}
})
