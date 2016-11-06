import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
import Helpers from '../helpers';

const Root = ({ history, store }) => {
	
	Helpers.cLog(['Root render calls by main.js', 'store=>', store, 'history=>', history, 'routes =>', routes], 'development');
	
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