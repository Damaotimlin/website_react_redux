import React, { propTypes } from 'react';
import { NavBar } from '../containers/nav_bar';

const Header = () => {
	return (
		<header className="col-md-12">
				<img 
						 className="pull-left col-xs-4"/>
				<NavBar/>
		</header>
	)
}
export default Header