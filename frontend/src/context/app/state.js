import React, { useReducer, useEffect } from 'react';
import axiosClient from '../../config/axiosClient';
import appContext from './context';
import appReducer from './reducer';
import types from './types';

// import { useQuery, gql } from '@apollo/client';

const AppState = ({ children }) => {
	const initialState = {
		allProducts: null,
		currentList: null,
		totalCart: 0,
		showAddForm: false,
		history: null,
		statsData: {
			topCategories: null,
			topItems: null,
		},
	};

	// Crear dispatch y state
	const [state, dispatch] = useReducer(appReducer, initialState);

	const setInitialState = async () => {
		try {
			await Promise.all([
				axiosClient.get('/currentList'),
				axiosClient.get('/topItems'),
				axiosClient.get('/topCategories'),
				axiosClient.get('/allProducts'),
			]).then(function ([currentList, topItems, topCategories, allProducts]) {
				dispatch({
					type: types.fetchAllData,
					payload: { currentList, topItems, topCategories, allProducts },
				});
			});
		} catch (error) {
			console.log('Error( AppState ): ', error);
		}
	};

	useEffect(() => {
		setInitialState();
	}, []);

	return (
		<appContext.Provider
			value={{
				statsData: state.statsData,
				currentList: state.currentList,
				allProducts: state.allProducts,
				totalCart: state.totalCart,
				doneInput: setInitialState,
			}}
		>
			{children}
		</appContext.Provider>
	);
};

export default AppState;
