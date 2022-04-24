import { useState, useEffect } from 'react';
import { getVideos } from '../../utils/get-videos';
import { CardContainer, PlaylistModal, VideoCard } from '../../components';

const Home = () => {
	const [videos, setVideos] = useState([]);
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		getVideos(setVideos);
	}, []);

	return (
		<div className="pg-defaults">
			{isActive && <PlaylistModal setIsActive={setIsActive} />}
			<CardContainer>
				{videos.length > 0
					? videos.map((video) => (
							<li key={video._id}>
								<VideoCard {...video} videos={videos} />
							</li>
					  ))
					: null}
			</CardContainer>
		</div>
	);
};

export { Home };
