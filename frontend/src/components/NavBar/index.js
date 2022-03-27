import React from 'react';
import CartStatus from './components/CartStatus';
import Logo from './components/Logo';
import Menu from './components/Menu';

const Navbar = () => {
	return (
		<div className='w-18  min-h-screen px-2 bg-white flex flex-col justify-between'>
			<Logo />
			<Menu />
			<CartStatus />
		</div>
	);
};

export default Navbar;
