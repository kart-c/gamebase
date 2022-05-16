import { useEffect, Fragment, useState } from 'react';
import { Loader, PlaylistCard } from '../../components';
import { useAuth, usePlaylists } from '../../context';
import { getPlaylist } from '../../utils';
import styles from './Playlist.module.css';

const Playlist = () => {
	const [loading, setLoading] = useState(true);
	const {
		authState: { token },
	} = useAuth();
	const {
		playlistsState: { playlists },
		playlistsDispatch,
	} = usePlaylists();

	useEffect(() => {
		if (token) {
			getPlaylist(token, playlistsDispatch, setLoading);
		}
	}, []);

	return (
		<div className="pg-defaults">
			{loading ? (
				<Loader />
			) : (
				<ul className={styles.playlistContainer}>
					{playlists.length > 0 ? (
						playlists.map((playlist) => (
							<Fragment key={playlist._id}>
								<PlaylistCard
									{...playlist}
									playlistImg={
										playlist.videos.length > 0 ? playlist.videos[0].videoThumbnail : null
									}
								/>
							</Fragment>
						))
					) : (
						<div className={styles.noVideos}>
							<h4>You do not have any Playlists</h4>
						</div>
					)}
				</ul>
			)}
		</div>
	);
};

export { Playlist };
