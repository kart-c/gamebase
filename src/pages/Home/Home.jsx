import { useState, useEffect } from 'react';
import { getVideos } from '../../utils/get-videos';
import { CardContainer, VideoCard } from '../../components';

const Home = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos(setVideos);
	}, []);

	return (
		<div className="pg-defaults">
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
