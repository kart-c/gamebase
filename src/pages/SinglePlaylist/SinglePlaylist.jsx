import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { HorizontalCard, HrCardWrapper, PageDetails } from '../../components';
import { usePlaylists } from '../../context';
import styles from './SinglePlaylist.module.css';

const SinglePlaylist = () => {
	const params = useParams();
	const {
		playlistsState: { playlists, date },
	} = usePlaylists();

	const currentPlaylist = playlists.find((playlist) => playlist._id === params._id);

	return (
		<div className={`pg-defaults ${styles.pgContainer}`}>
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
						<h4>You do not have any liked Videos</h4>
					</div>
				)}
			</HrCardWrapper>
		</div>
	);
};

export { SinglePlaylist };
