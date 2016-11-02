import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { authActions, getAuth } from '../core/auth/index';
import { paths } from '../routes';

import LoadingHandler from './loading_handler';

export class App extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	static propTypes = {
		auth: PropTypes.object.isRequired,
		childern: PropTypes.object.isRequired,
		signOut: PropTypes.func.isRequired
	};

	componentWillReceiveProps(nextProps){ // keep state up-to-date
		const { router } = this.context;
		const { auth } = this.props;

		if (auth.authenticated && !nextProps.auth.authenticated) {
			router.replace(path.SIGN_IN);
		} else if (!auth.authenticated && nextProps.auth.authenticated) {
			router.replace(path.LOGGED);
		}
	}

  render() {
    return (
      <div>
      	<LoadingHandler />
      	<Header 
      		authenticated={this.props.auth.authenticated} 
      		signOut={this.props.signOut} />
      	<h1>Kagufarm Firebase React Node</h1>
      	<main className="main">{this.props.children}</main>
      </div>
    );
  }
}

export default connect(
	createSelector( getAuth, auth =>({ auth }) ),
	authActions
)(App)























