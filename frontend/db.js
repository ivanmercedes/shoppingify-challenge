module.exports = () => {
	const currentList = {
		id: 1,
		name: 'Test shoping list',
		products: [
			{
				id: 1,
				name: 'Vivere',
				items: [
					{
						id: 1,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 2,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
				],
			},
			{
				id: 2,
				name: 'Fruta',
				items: [
					{
						id: 3,
						name: 'Guieno',
						quantity: 20,
						category_id: 1,
						category_name: 'Fruta',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 4,
						name: 'Manzana',
						quantity: 20,
						category_id: 1,
						category_name: 'Fruta',
						img: 'https://placeimg.com/640/480/animals',
					},
				],
			},
		],
		created_at: '2015-12-01T00:00:00',
		updated_at: '2015-12-01T00:00:00',
	};

	const topItems = [
		{
			name: 'Banana',
			percentage: 12,
		},
		{
			name: 'Arroz',
			percentage: 30,
		},
		{
			name: 'Platano',
			percentage: 18,
		},
	];

	const topCategories = [
		{
			name: 'Banana',
			percentage: 30,
		},
		{
			name: 'Arroz',
			percentage: 30,
		},
		{
			name: 'Platano',
			percentage: 18,
		},
	];

	const allProducts = {
		products: [
			{
				id: 1,
				name: 'Vivere',
				items: [
					{
						id: 1,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 2,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 3,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 4,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 5,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 6,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 7,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 8,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 9,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 10,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 11,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 12,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 13,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 14,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
				],
			},
			{
				id: 2,
				name: 'Fruta',
				items: [
					{
						id: 15,
						name: 'Guieno',
						quantity: 20,
						category_id: 1,
						category_name: 'Fruta',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 16,
						name: 'Manzana',
						quantity: 20,
						category_id: 1,
						category_name: 'Fruta',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 17,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 18,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 19,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 20,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 21,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 22,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 23,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 24,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 25,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 26,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 27,
						name: 'Platano',
						quantity: 20,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
					{
						id: 28,
						name: 'Yuca',
						quantity: 12,
						category_id: 1,
						category_name: 'Vivere',
						img: 'https://placeimg.com/640/480/animals',
					},
				],
			},
		],
	};

	return {
		allProducts,
		currentList,
		topCategories,
		topItems,
	};
};
