import React from 'react';
import {
	Nav,
	NavLink,
	NavMenu,
}
from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
return (
	<Nav>
		<NavMenu>
		<NavLink to='/'>
					<FontAwesomeIcon icon={faPeopleRoof} style={{color: 'orange', fontSize: '50px'}} />
		</NavLink>
		<NavLink to='/about' className='nav-item' >
			About
		</NavLink>
		<NavLink to='/favorites' className='nav-item'>
			Favorites
		</NavLink>
		<NavLink to='/contact' className='nav-item'>
			Contact
		</NavLink>
		</NavMenu>
	</Nav>
);
};

export default Navbar;
