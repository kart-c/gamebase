import { useState, useEffect, Fragment } from 'react';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import { useAuth, useLikes } from '../../context';
import { getLikedVideos } from '../../utils';
import styles from './Liked.module.css';

const Liked = () => {
	const {
		authState: { token },
	} = useAuth();
	const {
		likesState: { likes },
		likesDispatch,
	} = useLikes();

	useEffect(() => getLikedVideos(likesDispatch, token), []);

	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			<PageDetails pg={'Liked'} length={likes.length} />
			<HrCardWrapper>
				{likes.length > 0 ? (
					likes.map((likedVideo) => (
						<Fragment key={likedVideo._id}>
							<HorizontalCard {...likedVideo} />
						</Fragment>
					))
				) : (
					<div className={styles.noVideos}>
						<h4>You do not have any liked Videos</h4>
					</div>
				)}
			</HrCardWrapper>
		</div>
	);
};

export { Liked };
