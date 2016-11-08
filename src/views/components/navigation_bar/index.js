import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class NavigationBar extends Component {

	handleNavClick = () => {
		
	}
	
	render = () => {
		return (
			<nav className="navbar navbar-light bg-faded">
				<a className="navbar-brand">
					<img src="/src/images/dayeasier_logo.png" alt=""
							 width="236" height="62"/>
				</a>
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<a onClick={this.handleNavClick.bind(this)} 
							 className="nav-link">About</a>
					</li>
				</ul>
			</nav>
		)
	}
}