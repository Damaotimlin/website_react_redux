import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { paths } from '../routes';

import { LoadingHandler } from './loading_handler';

export class App extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	static propTypes = {
		childern: PropTypes.object.isRequired
	};

	componentWillReceiveProps(nextProps){ // keep state up-to-date
		const { router } = this.context;
	}

  render() {
    return (
      <div>
      	<Header />
      	<LoadingHandler />
      	<h1>Welcome to Dayeasier. ！網站架構中！</h1>
      	<main className="main">{this.props.children}</main>
      </div>
    );
  }
}























