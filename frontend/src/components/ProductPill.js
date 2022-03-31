import React from 'react';

const ProductPill = ({ item }) => {
	return (
		<div className='flex-none w-full md:w-1/5 px-2 my-2 relative group cursor-pointer'>
			<div className='flex flex-row justify-between px-4  py-3  bg-white rounded-xl shadow-sm'>
				<h2 className='group-hover:text-orange-400 ease-in duration-300 font-semibold'>
					{item.name}
				</h2>

				<div className='self-center'>
					<svg
						className='w-5 h-5 fill-gray-300 group-hover:fill-orange-400 ease-in duration-300'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
					>
						<path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default ProductPill;
