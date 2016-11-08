import React, { Component, PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Helpers from '../helpers';

import { getLoading, loadingActions } from '../core/loading';
import LoadingView from './components/loading';
import Header from './components/header'

class App extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	static propTypes = {
		children: PropTypes.object.isRequired
	};

  componentWillMount() {
    loadingActions.start()
    console.log('this.props.loading=>')
    console.log(this.props.loading)
  }

  componentDidMount() {
    loadingActions.finished()
    console.log('this.props.loading=>')
    console.log(this.props.loading)
  }


  // componentWillReceiveProps() {
  //   const { router } = this.context;
  //   Helpers.cLog(['componentWillReceiveProps::App::router=>', router])
  // }

  render() {
    return (
      <div>
      	<Header />
        <LoadingView loading={this.props.loading}/>
      	<h1>Welcome to Dayeasier. ！網站架構中！</h1>
      	<main className="main">{this.props.children}</main>
      </div>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------
// const mapStateToProps = createSelector(
//   getLoading,
//   (loadingView) => ({
//     loadingView
//   })
// )


// const mapDispatchToProps = Object.assign(
//   {},
//   loadingActions
// )

export default connect(
  state => ({
    loading: state.loadingView.loading
  }),
)(App)

