import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ShowRoom extends Component {
	render = () =>{
		return <span>Show something here</span>
	}
}


// export default connect(
// 	state => ({
// 			loadingView: state.viewStatus.loading
// 		}),
// 	null
// )(LoadingHandler)