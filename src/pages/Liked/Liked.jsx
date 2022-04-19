import React from 'react';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import styles from './Liked.module.css';

const Liked = () => {
	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			<PageDetails pg={'Liked'} />
			<HrCardWrapper>
				<HorizontalCard />
				<HorizontalCard />
				<HorizontalCard />
			</HrCardWrapper>
		</div>
	);
};

export { Liked };
