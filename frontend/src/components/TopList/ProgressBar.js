import React from 'react';

const ProgressBar = ({ bg, data: { name, percentage } }) => {
	return (
		<div className='mb-4'>
			<div className='info flex justify-between'>
				<h3 className='mb-5 text-sm font-semibold'>{name}</h3>

				<span className='text-lg font-semibold'>{percentage}%</span>
			</div>
			<div className='w-full bg-gray-200 rounded-full h-2.5'>
				<div
					className='h-2.5 rounded-full'
					style={{ width: `${percentage}%`, backgroundColor: bg }}
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
