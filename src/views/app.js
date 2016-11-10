import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { cLog } from '../helpers';

import { loadingStart, loadingComplete } from '../core/loading/actions';
import { burgerOnClicked } from '../core/navigation/actions'
import LoadingView from './components/loading';
import Header from './components/header';
import BurgerBtn from './components/burger_btn';

class App extends Component {
	static contextTypes = {
		router: PropTypes.object.isRequired,

	};

	static propTypes = {
		children: PropTypes.object.isRequired,
    loadingStart: PropTypes.func.isRequired,
    loadingComplete: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    burgerClicked: PropTypes.bool.isRequired,
    loadingProgress: PropTypes.number,
    burgerOnClicked: PropTypes.func.isRequired
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
        <BurgerBtn 
          onClickAction={this.props.burgerOnClicked}
          burgerClicked={this.props.burgerClicked}/>
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
    loadingProgress: state.loadingStatus.progress,
    burgerClicked: state.navigation.burgerClicked,
  }),
  { loadingStart, loadingComplete, burgerOnClicked }
)(App)

