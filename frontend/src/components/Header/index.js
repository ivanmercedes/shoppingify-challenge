import React from 'react';
import SearchForm from './SearchForm';

const Header = () => {
	return (
		<div className='header flex flex-col md:flex-row mb-10 justify-between'>
			<div className='title w-full mt-8 md:mt-0 md:w-2/4 pr-1 md:pr-0'>
				<h1 className='font-semibold text-lg md:text-3xl'>
					<span className='text-orange-500'>Shoppingify</span> allows you take
					your shopping list wherever you go
				</h1>
			</div>

			<div className='search-form pr-3 mt-5 md:mt-0 md:pr-0 md:w-2/5'>
				<SearchForm />
			</div>
		</div>
	);
};

export default Header;
