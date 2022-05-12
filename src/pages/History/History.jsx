import { useEffect, Fragment, useState } from 'react';
import { HorizontalCard, HrCardWrapper, Loader, PageDetails } from '../../components';
import { useAuth, useHistory } from '../../context';
import { getHistory } from '../../utils';
import styles from './History.module.css';

const History = () => {
	const [loading, setLoading] = useState(true);
	const {
		authState: { token },
	} = useAuth();
	const {
		historyState: { history, date },
		historyDispatch,
	} = useHistory();

	useEffect(() => {
		if (token) {
			getHistory(token, historyDispatch, setLoading);
		}
	}, []);

	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			{loading ? (
				<Loader />
			) : (
				<>
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
				</>
			)}
		</div>
	);
};

export { History };
