import { useState, useEffect, Fragment } from 'react';
import { HorizontalCard, HrCardWrapper, Loader, PageDetails } from '../../components';
import { useAuth, useWatchLater } from '../../context';
import { getWatchLater } from '../../utils';
import styles from './WatchLater.module.css';

const WatchLater = () => {
	const [loading, setLoading] = useState(true);
	const {
		authState: { token },
	} = useAuth();
	const {
		watchLaterState: { watchlater, date },
		watchLaterDispatch,
	} = useWatchLater();

	useEffect(() => {
		if (token) {
			getWatchLater(watchLaterDispatch, token, setLoading);
		}
	}, []);

	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			{loading ? (
				<Loader />
			) : (
				<>
					<PageDetails
						pg={'WatchLater'}
						length={watchlater.length}
						video={watchlater.length ? watchlater[0] : null}
						date={date}
					/>
					<HrCardWrapper>
						{watchlater.length > 0 ? (
							watchlater.map((video) => (
								<Fragment key={video._id}>
									<HorizontalCard {...video} />
								</Fragment>
							))
						) : (
							<div className={styles.noVideos}>
								<h4>You do not have any videos in watchlater list</h4>
							</div>
						)}
					</HrCardWrapper>
				</>
			)}
		</div>
	);
};

export { WatchLater };
