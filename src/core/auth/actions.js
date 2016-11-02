import firebase from 'firebase';
import { firebaseAuth } from '../firebase';
import {
	INIT_AUTH,
	SIGN_IN_ERROR,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS,
	VIEW_LOADING
} from '../../actions/index';

let authenticate = provider => {
	return dispatch => {
		firebaseAuth.signInWithPopup(provider)
			.then(res => dispatch(signInSuccess(res)))
			.catch(err => dispatch(signInError(err)));
	}
}

export const initAuth = user => ({
	type: INIT_AUTH,
	user: user
});

export const signInError = error => ({
	type: SIGN_IN_ERROR,
	error: error
});

export const singnInSuccess = result => {
	return dispatch => {
		dispatch({
			type: SIGH_IN_SUCCESS,
			signInUser: result.user,
		});
		dispatch({
			type: VIEW_LOADING,
			loading: false,
		});
	}
};

export const signInWithGoogle = () => {
	authenticate(new firebase.auth.GoogleAuthProvider())
	return {
		type: VIEW_LOADING,
		loading: true
	}
}

export const signInWithFacebook = () => {
	authenticate(new firebase.auth.FacebookAuthProvider())
	return {
		type: VIEW_LOADING,
		loading: true
	}
};

export const signOut = () => {
	dispatch => {
		firebaseAuth.signOut()
			.then(() => dispatch(signOutSuccess()))
	}
};

export const signOutSuccess = () => ({
	type: SIGN_OUT_SUCCESS
});
