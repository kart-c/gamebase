import { useState, useEffect } from 'react';
import { getVideos } from '../../utils/get-videos';
import { CardContainer, PlaylistModal, VideoCard } from '../../components';

const Home = () => {
	const [videos, setVideos] = useState([]);
	const [isActive, setIsActive] = useState(false);
	const [playlistVideo, setPlaylistVideo] = useState(null);

	useEffect(() => {
		getVideos(setVideos);
	}, []);

	const playlistHandler = (_id) => {
		setIsActive(true);
		const video = videos.find((video) => video._id === _id);
		setPlaylistVideo(video);
	};

	return (
		<div className="pg-defaults">
			{isActive && <PlaylistModal setIsActive={setIsActive} playlistVideo={playlistVideo} />}
			<CardContainer>
				{videos.length > 0
					? videos.map((video) => (
							<li key={video._id}>
								<VideoCard {...video} videos={videos} playlistHandler={playlistHandler} />
							</li>
					  ))
					: null}
			</CardContainer>
		</div>
	);
};

export { Home };
