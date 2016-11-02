import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { getRoute } from '../routes';

export default function Root({ history, store }){
	return (
		<Provider store={store}>
			<Router 
				history={history}
				routes={getRoute(store.getState)} />
		</Provider>
	);
}

Root.propTypes = {
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired
};