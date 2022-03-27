import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HistoryPage from '../pages/History';
import ItemsPage from '../pages/Items';
import StatisticPage from '../pages/Statistics';

const RoutesList = () => {
	return (
		<Routes>
			<Route path='/' element={<ItemsPage />} />
			<Route path='history' element={<HistoryPage />} />
			<Route path='stats' element={<StatisticPage />} />
		</Routes>
	);
};

export default RoutesList;
