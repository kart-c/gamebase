import React from 'react';
import { HorizontalCard, PageDetails } from '../../components';
import styles from './Liked.module.css';

const Liked = () => {
	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			<PageDetails pg={'Liked'} />
			<div className={styles.list}>
				<HorizontalCard />
				<HorizontalCard />
				<HorizontalCard />
			</div>
		</div>
	);
};

export { Liked };
