import React, { Component, PropTypes } from 'react';

class BurgerBtn extends Component {
	

	static propTypes = {
	  burgerClicked: PropTypes.bool.isRequired,
	  onClickAction: PropTypes.func.isRequired
	};

	render(){		
		console.log(`this.burgerClicked: ${this.props.burgerClicked}`)
		if (!this.props.burgerClicked) {
			return (
				<div>
					<button onClick={this.props.onClickAction}>Click Me</button>
				</div>
			)
		}
		
	  return (
	    <div>
	    	<button 
	    		className="c-hamburger c-hamburger--rot"
	    		onClick={this.props.onClickAction}>
				  <span>toggle menu</span>
				</button>
				<button 
					className="c-hamburger c-hamburger--htx">
				  <span>toggle menu</span>
				</button>

				<button 
					className="c-hamburger c-hamburger--htla">
				  <span>toggle menu</span>
				</button>

				<button 
					className="c-hamburger c-hamburger--htra">
				  <span>toggle menu</span>
				</button>
	    </div>
	  );
	}
};

export default BurgerBtn
