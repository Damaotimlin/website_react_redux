import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { getRoutes } from '../routes';
import Helpers from '../helpers/index';

export default function Root({ history, store }){
	
	Helpers.cLog(['Root render calls=>', store, history, 'routes =>', getRoutes(store.getState)]);
	
	return (
		<Provider store={store}>
			<Router 
				history={history}
				routes={getRoutes(store.getState)} />
		</Provider>
	);
}

Root.propTypes = {
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired
};