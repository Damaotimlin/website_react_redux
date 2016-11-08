import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class LoadingView extends Component {
	render(){
		console.log(this.props.loading)
		if (this.props.loading) {
			console.log('Loading...')
			// this.props.action.start
			return <div>Loading...</div>;
		}
		// this.props.action.finished
		console.log('Loaded')
		return <span>page did load</span>
	}
}

