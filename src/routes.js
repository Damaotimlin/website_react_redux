//============================================================
// Components
//------------------------------------------------------------
import { App } from './components/app';
import { LoadingHandler } from './components/loading_handler';
import { ShowRoom } from './components/show_room';
import { notFound } from './components/page_not_found'

//============================================================
// Containers
//------------------------------------------------------------
import { NavBar } from './containers/nav_bar';

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
		// { path: rp.ABOUT, component: ShowRoom },
		{ path: rp.NOT_FOUND, component: notFound },
	]
};

export default routes
//        react-router
//             | 
// "posts/:*" ---> { this.props.params.* }