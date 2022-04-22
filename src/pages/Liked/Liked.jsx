import { useState, useEffect, Fragment } from 'react';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import { useAuth } from '../../context';
import { fetchLikes } from '../../services';
import styles from './Liked.module.css';

const Liked = () => {
	const [likedVideos, setLikedVideos] = useState([]);
	const {
		authState: { token },
	} = useAuth();

	const getLikedVideos = async () => {
		try {
			const response = await fetchLikes(token);
			console.log(response);
			if (response.status === 200) {
				setLikedVideos(response.data.likes);
			}
		} catch (error) {
			console.error('ERROR: ', error.response);
		}
	};

	useEffect(() => getLikedVideos(), []);

	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			<PageDetails pg={'Liked'} length={likedVideos.length} />
			<HrCardWrapper>
				{likedVideos.length > 0
					? likedVideos.map((likedVideo) => (
							<Fragment key={likedVideo._id}>
								<HorizontalCard {...likedVideo} />
							</Fragment>
					  ))
					: 'No Videos to show'}
				{/* <HorizontalCard />
				<HorizontalCard />
				<HorizontalCard /> */}
			</HrCardWrapper>
		</div>
	);
};

export { Liked };
