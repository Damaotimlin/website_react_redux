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
    loadingProgress: PropTypes.number,
	};

  componentWillMount() {
    this.props.loadingStart();
  }

  componentDidMount() {
    this.props.loadingComplete();
  }


  // componentWillReceiveProps() {
  //   const { router } = this.context;
  //   Helpers.cLog(['componentWillReceiveProps::App::router=>', router])
  // }

  render() {
    return (
      <div>
      	<Header />
        <LoadingView 
          loading={this.props.isLoading}/>
      	<main className="main">{this.props.children}</main>
      </div>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------
export default connect(
  state => ({ 
    isLoading: state.loadingStatus.isLoading,
    loadingProgress: state.loadingStatus.progress
  }),
  { loadingStart, loadingComplete }
)(App)

