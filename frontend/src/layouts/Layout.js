import React from 'react';
import Navbar from '../components/NavBar';

import PropTypes from 'prop-types';
import Aside from '../components/Aside';

const Layout = ({ children }) => {
	return (
		<div className='app-container'>
			<Navbar />
			<main className='w-4/5  md:px-10 2xl:p-14 h-screen overflow-x-auto'>
				{children}
			</main>
			<Aside />
		</div>
	);
};

Layout.prototypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
