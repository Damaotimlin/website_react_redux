import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class UserSignIn extends Component {
	static proptypes = {
		userSignIin: PropTypes.bool
	}

	state = {
		userSignIin: false
	}

	render(){
		return <div></div>
	}

}

export default connect (
	state => ({
		'userSignIin': state.userStatus.signIn
	}),
	null
)(UserSignIn)