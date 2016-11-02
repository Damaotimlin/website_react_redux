import React, { propTypes } from 'react';

export default function Header({ authenticated, signOut }){
	return (
		<header className="header">
			<div className="g-row">
				<div>
					<div>
						<h1 className="header__title">Kagufarm Firebase React</h1>
						<ul className="header__action">
							{authenticated ? <li><button className="btn btn-success" inClick={signOut}>Sign Out</button></li> : null}
						</ul>
					</div>
				</div>
			</div>
		</header>

	)
}