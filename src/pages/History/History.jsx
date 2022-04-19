import React from 'react';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import styles from './History.module.css';

const History = () => {
	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			<PageDetails pg={'History'} />
			<HrCardWrapper>
				<HorizontalCard />
				<HorizontalCard />
				<HorizontalCard />
			</HrCardWrapper>
		</div>
	);
};

export { History };
