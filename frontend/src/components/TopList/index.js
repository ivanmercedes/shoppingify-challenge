import React from 'react';
import ProgressBar from './ProgressBar';

const Progress = ({ title, data, bg }) => {
	// alert(typeof Object.entries(data));
	if (!data) return null;

	return (
		<div className='top-list text-2xl'>
			{title ? <h2 className='title mb-5'>{title}</h2> : null}

			{data.map((item, index) => (
				<ProgressBar key={`progress_${index}`} data={item} bg={bg} />
			))}
		</div>
	);
};

export default Progress;
