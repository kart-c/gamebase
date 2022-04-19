import React from 'react';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import styles from './WatchLater.module.css';

const WatchLater = () => {
	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			<PageDetails pg={'WatchLater'} />
			<HrCardWrapper>
				<HorizontalCard />
				<HorizontalCard />
				<HorizontalCard />
			</HrCardWrapper>
		</div>
	);
};

export { WatchLater };
