//============================================================
// Components
//------------------------------------------------------------
import ShowRoom from './components/show_room';
import NavigationBar from './components/navigation_bar';

//============================================================
// Containers
//------------------------------------------------------------
import App from './app';
import { notFound } from './pages/404'


//============================================================
// Route paths setting
//------------------------------------------------------------
export const route_paths = {
	ROOT: '/',
	NOT_FOUND: '*',
};

const rp = route_paths;

export const routes = {
	path: rp.ROOT,
	component: App,
	indexRoute: { component: ShowRoom },
	childRoutes: [
		{ path: rp.ABOUT, component: ShowRoom },
		{ path: rp.NOT_FOUND, component: notFound },
	]
};

export default routes
//        react-router
//             | 
// "posts/:*" ---> { this.props.params.* }