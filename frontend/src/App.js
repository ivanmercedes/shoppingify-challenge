import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppState from './context/app/state';
import RoutesList from './routes';

const App = () => {
	return (
		<BrowserRouter>
			<AppState>
				<RoutesList />
			</AppState>
		</BrowserRouter>
	);
};

export default App;
