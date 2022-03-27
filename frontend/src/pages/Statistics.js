import React, { useContext } from 'react';
import { CardinalAreaChart } from '../components/Charts/';
import Progress from '../components/TopList';
import appContext from '../context/app/context';
import Layout from '../layouts/Layout';

const StatisticPage = () => {
	const AppContext = useContext(appContext);
	const {
		statsData: { topItems, topCategories },
	} = AppContext;
	return (
		<Layout>
			<div className='stats-gerenals flex flex-col md:flex-row justify-between '>
				<div className='top-items md:w-2/5'>
					<Progress title='Top items' data={topItems} bg='#fb923c' />
				</div>

				<div className='top-categories md:w-2/5'>
					<Progress title='Top categories' data={topCategories} bg='#56CCF2' />
				</div>
			</div>
			<CardinalAreaChart title='Monthly Summary' />
		</Layout>
	);
};

export default StatisticPage;
