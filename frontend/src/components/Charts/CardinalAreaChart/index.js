import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{
		name: 'January',
		Items: 4000,
	},
	{
		name: 'Febrary',
		Items: 3000,
	},
	{
		name: 'March',
		Items: 2000,
	},
	{
		name: 'April',
		Items: 2780,
	},
	{
		name: 'May',
		Items: 1890,
	},
	{
		name: 'June',
		Items: 2390,
	},
	{
		name: 'July',
		Items: 3490,
	},
];

const CardinalAreaChart = ({ title }) => {
	return (
		<>
			<div className='w-full h-64'>
				<h2 className='mb-12 text-2xl mt-9'>{title}</h2>
				<ResponsiveContainer>
					<LineChart
						width={500}
						height={200}
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='Items' stroke='#F9A109' />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);
};

export default CardinalAreaChart;
