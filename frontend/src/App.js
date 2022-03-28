import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppState from './context/app/state';
import RoutesList from './routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient/client';

const App = () => {
	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<AppState>
					<RoutesList />
				</AppState>
			</ApolloProvider>
		</BrowserRouter>
	);
};

export default App;
