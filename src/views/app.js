import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { cLog } from '../helpers';

import { loadingStart, loadingComplete } from '../core/loading/actions';
import LoadingView from './components/loading';
import Header from './components/header'

class App extends Component {
	static contextTypes = {
		router: PropTypes.object.isRequired,

	};

	static propTypes = {
		children: PropTypes.object.isRequired,
    loadingStart: PropTypes.func.isRequired,
    loadingComplete: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
	};

  componentWillMount() {
    this.props.loadingStart();
    cLog([
      'this.props.loadingStart => ', this.props.loadingStart,
      'this.props.isLoading =>', this.props.isLoading
    ]);
  }

  componentDidMount() {
    this.props.loadingComplete();
    cLog([
      'this.props.finished => ', this.props.loadingComplete,
      'this.props.isLoading =>', this.props.isLoading
    ]);
  }


  // componentWillReceiveProps() {
  //   const { router } = this.context;
  //   Helpers.cLog(['componentWillReceiveProps::App::router=>', router])
  // }

  render() {
    return (
      <div>
      	<Header />
        <LoadingView loading={this.props.isLoading}/>
      	<h1>Welcome to Dayeasier. ！網站架構中！</h1>
      	<main className="main">{this.props.children}</main>
      </div>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------
export default connect(
  state => ({ isLoading: state.loadingView.isLoading }),
  { loadingStart, loadingComplete }
)(App)

