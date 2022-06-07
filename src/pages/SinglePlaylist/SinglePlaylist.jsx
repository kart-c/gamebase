import { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import { usePlaylists } from '../../context';
import styles from './SinglePlaylist.module.css';

const SinglePlaylist = () => {
	const params = useParams();
	const navigate = useNavigate();
	const {
		playlistsState: { playlists, date },
	} = usePlaylists();

	const currentPlaylist = playlists.find((playlist) => playlist._id === params._id);

	useEffect(() => {
		if (!currentPlaylist) navigate('*');
	}, [params, playlists]);

	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
			{currentPlaylist ? (
				<>
					<PageDetails
						pg={currentPlaylist.title}
						length={currentPlaylist.videos.length}
						video={currentPlaylist.videos.length ? currentPlaylist.videos[0] : null}
						date={date}
					/>
					<HrCardWrapper>
						{currentPlaylist.videos.length > 0 ? (
							currentPlaylist.videos.map((video) => (
								<Fragment key={video._id}>
									<HorizontalCard {...video} playlist_id={currentPlaylist._id} />
								</Fragment>
							))
						) : (
							<div className={styles.noVideos}>
								<h4>You do not have videos in this playlist</h4>
							</div>
						)}
					</HrCardWrapper>
				</>
			) : null}
		</div>
	);
};

export { SinglePlaylist };
