import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Helpers from './helpers/index';

import rootReducer from './reducers/index';
import Root from './components/root';
import '../style/styles.scss';

const DEVELOPMENT = NODE_ENV === 'development';

const INITIAL_STATE = {}

export const hotStore = () => {
	let middlewares = applyMiddleware(ReduxPromise, ReduxThunk);
	
	middlewares = compose(
		middlewares, 
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	const store = createStore(rootReducer, INITIAL_STATE, middlewares);
	
	if (module.hot) {
		module.hot.accept('./reducers/index', () => {
			store.replaceReducer(require('./reducers/index').default);
		})
	};
	return store;
}

const store = hotStore();
Helpers.cLog(['store = hotStore()=>', store]);

const syncedHistory = syncHistoryWithStore(browserHistory, store);

const render = Root => {
	Helpers.cLog(['main render() called'])
	ReactDOM.render(
		<AppContainer>
			<Root history={syncedHistory} store={store} />
		</AppContainer>,
		document.getElementById('root')
	);
}

if (module.hot) {
	module.hot.accept('./components/root', () => {
		render(require('./components/root').default);
	});
};

// init routing App
render(Root);

if (DEVELOPMENT) {
	Helpers.cLog([
		'store.getState() =>',
		store.getState(),
		'store.dispatch =>',
		store.dispatch
	])
}







