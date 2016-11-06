import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { paths } from '../routes';
import Header from './header'
import Helpers from '../helpers';

import LoadingHandler from './loading_handler';

export class App extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	static propTypes = {
		children: PropTypes.object.isRequired
	};

  componentWillReceiveProps() {
    const { router } = this.context;
    Helpers.cLog(['App::router=>', router])
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

// export default connect(
//   state = 
// )