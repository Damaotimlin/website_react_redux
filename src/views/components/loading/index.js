import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class LoadingView extends Component {
	render(){
		if (this.props.loading) {
			return <div>Loading...</div>;
		}
		return <span>page did load</span>
	}
}

