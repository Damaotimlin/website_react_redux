// initial component 
import App from './components/app';
import { LoadingHandler } from './components/loading_handler';

export const paths = {
	ROOT: '/',
	ABOUT: '/about'
}

export const getRoutes = getState => ({
	path: paths.ROOT,
	component: App,
	childRoutes: [
		{
			indexRoute: {
				component: LoadingHandler
			}
		}
	]
});

//        react-router
//             | 
// "posts/:*" ---> { this.props.params.* }
