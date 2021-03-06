import React from 'react';
import Header from '../components/Header';
// import appContext from '../context/app/context';
import Layout from '../layouts/Layout';
import { useQuery, gql } from '@apollo/client';

const FETCH_DATA = gql`
	query fetchData {
		allCategory {
			name
			_id
			products {
				name
				image
				description
				_id
			}
		}
	}
`;

const ItemsPage = () => {
	const { data, loading, error } = useQuery(FETCH_DATA);

	console.log({ loading });
	console.log({ error });
	console.log({ data });

	if (loading) {
		return <div>loading</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	const { allCategory } = data;

	console.log(allCategory);
	return (
		<Layout>
			<Header />
			{allCategory.map(product => (
				<div
					key={`category-${product._id}`}
					className='flex flex-col sm:flex-row content-center flex-wrap mb-10 last-of-type:mb-0'
				>
					<div className='w-full'>
						<h3 className='text-lg mb-3 font-medium px-2'>{product.name}</h3>
					</div>
					{product.products.map(item => (
						<div
							key={`product-${item._id}`}
							className='flex-none w-full md:w-1/5 px-2 my-2 relative group cursor-pointer'
						>
							<div className='flex flex-row justify-between px-4  py-3  bg-white rounded-xl shadow-sm'>
								<h2 className='group-hover:text-orange-400 ease-in duration-300 font-semibold'>
									{item.name}
								</h2>

								<div className='self-center'>
									<svg
										className='w-5 h-5 fill-gray-300 group-hover:fill-orange-400 ease-in duration-300'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 448 512'
									>
										<path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' />
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</Layout>
	);
};

export default ItemsPage;
