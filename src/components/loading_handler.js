import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoadingHandler extends Component {
	render(){
		if (this.props.loadingView) {
			console.log('Loading...')
			return <div>Loading...</div>;
		}
		return <span>page did load</span>
	}
}

export default connect(
	state => ({
			loadingView: state.viewStatus.loading
		}),
	null
)(LoadingHandler)