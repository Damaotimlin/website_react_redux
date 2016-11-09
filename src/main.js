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
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
//============================================================
// Custom Modules
//------------------------------------------------------------
import Root from './views/root';
import { cLog } from './helpers';
import './views/styles/styles.scss';
import rootReducer from './core/reducers';

const INITIAL_STATE = {}

cLog([
	'Welcome to Dayeasier International', 
	'For more details please contact with us at', 
	'Tele : 04-2313-6598'], 'production');

const hotStoreAndReduxDevWithoutProduction = () => {
	let middlewares = applyMiddleware(ReduxPromise, ReduxThunk);

	const composeEnhancers = 
		process.env.NODE_ENV != 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			: compose;
			
	const store = createStore(
		rootReducer, 
		composeEnhancers(
			middlewares
		)
	);

	if (module.hot) {
		module.hot.accept('./core/reducers', () => {
			store.replaceReducer(require('./core/reducers').default);
		})
	};

	return store;
}

const store = hotStoreAndReduxDevWithoutProduction();
const history = syncHistoryWithStore(hashHistory, store);

const render = Root => {
	// cLog(['main.js render call=>', 'history=>', history, 'store=>', store], 'development');
	ReactDOM.render(
		<AppContainer>
			<Root history={history} store={store} />
		</AppContainer>,
		document.querySelector('.container-fluid')
	);
}

if (module.hot) {
	module.hot.accept('./views/root', () => {
		render(require('./views/root').default);
	});
};

render(Root);

// cLog([
// 	'store.getState() =>',
// 	store.getState(),
// 	'store.dispatch =>',
// 	store.dispatch
// ], 'development')







