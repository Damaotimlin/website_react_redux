import classNames from 'classNames';
import React, { Component, PropTypes } from 'react';

class BurgerBtn extends Component {
	

	static propTypes = {
	  burgerClicked: PropTypes.bool.isRequired,
	  onClickAction: PropTypes.func.isRequired
	};

	render(){		
		console.log(`this.burgerClicked: ${this.props.burgerClicked}`)
		return (
			<div>
				<button
					className={classNames('c-hamburger', 'c-hamburger--rot', 
															 {'is-active': this.props.burgerClicked})}
					onClick={this.props.onClickAction.bind(this)}>
					<span>hambagure</span>
				</button>
				<br/>
				<button
					className={classNames('c-hamburger', 'c-hamburger--htx',
																{'is-active': this.props.burgerClicked})} 
					onClick={this.props.onClickAction}>
					<span>hambagure</span>
				</button>
				<br/>
				<button
					className={classNames('c-hamburger', 'c-hamburger--htra',
																{'is-active': this.props.burgerClicked})} 
					onClick={this.props.onClickAction}>
					<span>hambagure</span>
				</button>
			</div>
		)
	}
};

export default BurgerBtn
