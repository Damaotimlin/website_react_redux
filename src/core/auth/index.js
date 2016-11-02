import { firebaseAuth } from '../firebase';
import * as authActions from './actions';

export { authActions };
export { getAuth, isAuthenticated } from './selectors';

export function initAuth(dispatch) {
	return new Promise((resolve, reject) => {
		const unsub = firebaseAuth.onAuthStateChanged(
			user => {
				dispatch(authActions.initAuth(user));
				unsub();
				resolve();
			},
			err => reject(err)
		);
	});
}