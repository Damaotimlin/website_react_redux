import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import { initAuth } from './core/auth/index';
import rootReducer from './reducers/index';
import Root from './components/root';
import '../style/style.css';

const INITIAL_STATE = {}

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

const syncedHistory = syncHistoryWithStore(browserHistory, store);

const render = Root => {
	ReactDOM.render(
		<AppContainer>
			<Root history={syncedHistory} store={store} />
		</AppContainer>,
		document.querySelector('.container')
	);
}

if (module.hot) {
	module.hot.accept('./components/root', () => {
		render(require('./components/root').default);
	});
};

console.log('store.getState() =>');
console.log(store.getState());
console.log('store.dispatch =>');
console.log(store.dispatch)

// initAuth(store.dispatch)
// 	.then(() => render(Root))
// 	.catch(err => console.log(err));






