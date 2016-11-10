//============================================================
// Components
//------------------------------------------------------------
// import ShowRoom from './components/show_room';
// import NavigationBar from './components/navigation_bar';

//============================================================
// Containers
//------------------------------------------------------------
import App from '../app';
import Home from './home'
import NotFound from './404'


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
	indexRoute: { component: Home },
	childRoutes: [
		{ path: rp.NOT_FOUND, component: NotFound },
	]
};

export default routes
//        react-router
//             | 
// "posts/:*" ---> { this.props.params.* }