export const getAuth = state => {
	state.firebaseAuth
}

export const isAuthenticated = state => {
	getAuth(state).authenticated
}
