import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { paths } from '../routes';
import Header from './header'
import Helpers from '../helpers/index';

import LoadingHandler from './loading_handler';

export default class App extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	static propTypes = {
		childern: PropTypes.object.isRequired
	};

  render() {
    return (
      <div>
      	<Header />
        <LoadingHandler />
      	<h1>Welcome to Dayeasier. ！網站架構中！</h1>
      	{this.props.children}
      </div>
    );
  }
}
