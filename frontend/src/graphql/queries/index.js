import { gql } from '@apollo/client';

export const CATEGORY_WITH_PRODUCTS = gql`
	query getCategoryWithProducts {
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
