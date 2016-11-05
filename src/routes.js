// initial component 
import { App } from './components/app';

export const paths = {
	ROOT: '/',
}


export const getRoutes = getState => ({
	path: paths.ROOT,
	component: App,
	childRoutes: [
		{ indexRoute: {
				component: App,
			}
		}
	]
});

//        react-router
//             | 
// "posts/:*" ---> { this.props.params.* }
