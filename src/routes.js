import { isAuthenticated } from './core/auth/index'

// initial component 
import App from './components/app';
import UserSignIn from './containers/user_signin';

export const paths = {
	ROOT: '/',
	SIGN_IN: '/sign-in',
	LOGGED: '/'
}

const requireAuth = getState => {
	return (nextState, replace) => {
		if (!isAuthenticated(getState())){
			replace(path.SIGN_IN)
		}
	}
}

const requireUnauth = getState => {
	return (nextState, replace) => {
		if (isAuthenticated(getState())){
			replace(path.LOGGED)
		}
	}
}

export const getRoute = getState => ({
	// mach 'root' to component and nest some children inside
	path: paths.ROOT,
	component: App,
	childRoutes: [
		{ indexRoute: {
				component: App,
				onEnter: requireAuth(getState)
			}
		},
		{	path: paths.SIGN_IN,
			component: UserSignIn,
			onEnter: requireUnauth(getState)
		}
	]
});

//        react-router
//             | 
// "posts/:*" ---> { this.props.params.* }
