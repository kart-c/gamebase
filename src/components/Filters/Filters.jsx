import { useState, useEffect } from 'react';
import { getCategories } from '../../utils';
import styles from './Filters.module.css';

const Filters = ({ setFilterInput }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories(setCategories);
	}, []);

	return (
		<div>
			<select
				name="category"
				id="category"
				onChange={(e) => setFilterInput(e.target.value)}
				className={styles.filter}
			>
				<option value="">View All</option>
				{categories.map(({ categoryName, _id }) => (
					<option value={categoryName} key={_id}>
						{categoryName}
					</option>
				))}
			</select>
		</div>
	);
};

export { Filters };
