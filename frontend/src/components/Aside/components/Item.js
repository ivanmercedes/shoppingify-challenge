import React, { useState } from 'react';

const Item = ({ data: { id, name, quantity } }) => {
	const [open, setOpen] = useState(false);

	const handleIncrement = item => {
		console.log('+1', item);
	};

	const handleDecrement = item => {
		console.log('-1', item);
	};

	const handleDelete = item => {
		console.log('borrando...', item);
	};
	return (
		<div className='my-5 flex justify-between'>
			<h3 className='font-semibold text-xl'>{name}</h3>

			<div
				className={`relative quantity-picker flex ${
					open ? 'open' : ''
				} px-3 py-1 rounded-2xl`}
			>
				<button
					onClick={() => handleDelete(id)}
					className={`delete -left-8 top-0 ${
						!open ? 'hidden' : ''
					} bg-orange-400 w-11 h-11 rounded-2xl absolute flex justify-center items-center`}
				>
					<svg
						className='icon fill-white '
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
					>
						<path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z' />
					</svg>
				</button>

				<button
					className={`minus px-2 ${!open ? 'hidden' : ''}`}
					onClick={() => handleDecrement(id)}
				>
					<svg
						className='icon fill-amber-500'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
					>
						<path d='M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z' />
					</svg>
				</button>

				<button
					onClick={() => setOpen(!open)}
					className='border-2 border-amber-500 px-4 py-1 rounded-2xl text-amber-500 font-semibold align-top'
				>
					{quantity} pecs
				</button>

				<button
					className={`plus px-2 ${!open ? 'hidden' : ''}`}
					onClick={() => handleIncrement(id)}
				>
					<svg
						className='icon fill-amber-500'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
					>
						<path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Item;
