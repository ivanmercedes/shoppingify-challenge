import { useState, useEffect } from 'react';

const useGroupByCategory = items => {
	const [groupItems, setGroupItems] = useState(null);

	useEffect(() => {
		const groupItems = data => {
			return data.reduce(function (r, a) {
				r[a.category_name] = r[a.category_name] || [];
				r[a.category_name].push(a);
				return r;
			}, []);
		};
		return setGroupItems(groupItems(items));
	}, []);

	return { groupItems };
};

export default useGroupByCategory;
