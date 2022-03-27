import types from './types';

export default (state, action) => {
	switch (action.type) {
		case types.fetchAllData:
			return {
				...state,
				allProducts: action.payload.allProducts.data,
				currentList: action.payload.currentList.data,
				totalCart: action.payload.currentList.data.products.reduce(
					items => items.items.length + items.items.length
				),
				statsData: {
					...state.statsData,
					topCategories: action.payload.topCategories.data,
					topItems: action.payload.topItems.data,
				},
			};
		// case LIMPIAR_ALERTA:
		// 	return {
		// 		...state,
		// 		mensaje_archivo: null,
		// 	};
		// case SUBIR_ARCHIVO:
		// 	return {
		// 		...state,
		// 		cargando: true,
		// 	};
		// case SUBIR_ARCHIVO_EXITO:
		// 	return {
		// 		...state,
		// 		nombre: action.payload.nombre,
		// 		nombre_original: action.payload.nombre_original,
		// 		cargando: null,
		// 	};
		// case SUBIR_ARCHIVO_ERROR: {
		// 	return {
		// 		...state,
		// 		mensaje_archivo: action.payload,
		// 		cargando: null,
		// 	};
		// }

		// case CREAR_ENLACE_EXITO:
		// 	return {
		// 		...state,
		// 		url: action.payload,
		// 	};
		// case LIMPIAR_STATE:
		// 	return {
		// 		...state,
		// 		mensaje_archivo: null,
		// 		nombre: '',
		// 		nombre_original: '',
		// 		cargando: null,
		// 		descargas: 1,
		// 		password: '',
		// 		autor: null,
		// 		url: '',
		// 	};
		// case AGREGAR_PASSWORD:
		// 	return {
		// 		...state,
		// 		password: action.payload,
		// 	};
		// case AGREGAR_DESCARGAS:
		// 	return {
		// 		...state,
		// 		descargas: action.payload,
		// 	};
		default:
			return state;
	}
};
