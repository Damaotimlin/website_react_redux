//============================================================
// Lib
//------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//============================================================
// Middlewares
//------------------------------------------------------------
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
//============================================================
// Custom Modules
//------------------------------------------------------------
import Root from './components/root';
import rootReducer from './reducers';
import Helpers from './helpers';
import '../style/styles.scss';

const INITIAL_STATE = {}

Helpers.cLog([
	'Welcome to Dayeasier International', 
	'For more details please contact with us at', 
	'Tele : 04-2313-6598'], 'production');

const hotStoreAndReduxDevWithoutProduction = () => {
	const middlewares = applyMiddleware(ReduxPromise, ReduxThunk);

	const composeEnhancers = 
		process.env.NODE_ENV != 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			: compose;

	const store = createStore(
		rootReducer, 
		INITIAL_STATE,
		composeEnhancers(
			middlewares
		)
	);
	
	if (module.hot) {
		module.hot.accept('./reducers/index', () => {
			store.replaceReducer(require('./reducers/index').default);
		})
	};
	return store;
}

const store = hotStoreAndReduxDevWithoutProduction();
const history = syncHistoryWithStore(hashHistory, store);

const render = Root => {
	// Helpers.cLog(['main.js render call=>', 'history=>', history, 'store=>', store], 'development');
	Helpers.cLog(['main.js calls'])
	ReactDOM.render(
		<AppContainer>
			<Root history={history} store={store} />
		</AppContainer>,
		document.querySelector('.container-fluid')
	);
}

if (module.hot) {
	module.hot.accept('./components/root', () => {
		render(require('./components/root').default);
	});
};

render(Root);

// Helpers.cLog([
// 	'store.getState() =>',
// 	store.getState(),
// 	'store.dispatch =>',
// 	store.dispatch
// ], 'development')







