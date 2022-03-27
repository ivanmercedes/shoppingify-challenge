import React from 'react';
import AddNewItem from './components/AddNewItem';

import image from '../../assets/images/source.svg';
import ShoppingList from './components/ShoppingList';

const Aside = () => {
	const handleClick = () => {
		console.log('caca');
	};

	return (
		<div className='hidden md:block absolute md:relative w-full md:w-1/4 bg-orange-100 p-10'>
			<AddNewItem
				image={image}
				description="Didn't find what you need?"
				btnText='Add item'
				handleClick={handleClick}
			/>

			<ShoppingList />
		</div>
	);
};

export default Aside;
