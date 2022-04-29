import { useEffect, Fragment } from 'react';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import { useAuth, useHistory } from '../../context';
import { getHistory } from '../../utils';
import styles from './History.module.css';

const History = () => {
	const {
		authState: { token },
	} = useAuth();
	const {
		historyState: { history, date },
		historyDispatch,
	} = useHistory();

	useEffect(() => {
		if (token) {
			getHistory(token, historyDispatch);
		}
	}, []);

	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			<PageDetails
				pg={'History'}
				length={history.length}
				video={history.length ? history[0] : null}
				date={date}
			/>
			<HrCardWrapper>
				{history.length > 0 ? (
					history.map((historyVideo) => (
						<Fragment key={historyVideo._id}>
							<HorizontalCard {...historyVideo} />
						</Fragment>
					))
				) : (
					<div className={styles.noVideos}>
						<h4>You do not have any History Videos</h4>
					</div>
				)}
			</HrCardWrapper>
		</div>
	);
};

export { History };
