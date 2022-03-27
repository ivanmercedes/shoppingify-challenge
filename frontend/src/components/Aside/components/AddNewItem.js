import React from 'react';

const AddNewItem = ({ image, description, btnText, handleClick }) => {
	return (
		<div className='bg-ruby rounded-3xl flex flex-row justify-between px-3 pb-3'>
			<div className='img -mt-5'>
				<img src={image} alt='' className='w-28' />
			</div>

			<div className='self-center text-left w-auto p-3 pb-0'>
				<p className='text-white font-semibold mb-3 text-xl'>{description}</p>
				<button
					onClick={handleClick}
					className='bg-gray-100 py-3 px-7 text-black rounded-2xl font-semibold'
				>
					{btnText}
				</button>
			</div>
		</div>
	);
};

export default AddNewItem;
