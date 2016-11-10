import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './pages/routes';
import { cLog } from '../helpers';

const Root = ({ history, store }) => {
	
	cLog(['Root render calls by main.js', 
		'store=>', store, 
		'store.getState()=>', store.getState(), 
		'history=>', history, 
		'routes =>', routes], 
		'mute');
	
	return (
		<Provider store={store}>
			<Router history={history} routes={routes}/>
		</Provider>
	);
}

Root.propTypes = {
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
};

export default Root