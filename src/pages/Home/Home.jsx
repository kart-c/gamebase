import { useState, useEffect } from 'react';
import { getVideos } from '../../utils/get-videos';
import { CardContainer, Filters, Header, Loader, VideoCard } from '../../components';
import styles from './Home.module.css';

const Home = () => {
	const [videos, setVideos] = useState([]);
	const [filterInput, setFilterInput] = useState('');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getVideos(setVideos, setLoading);
	}, []);

	const filterHandler = (videos, filterInput) => {
		if (filterInput) {
			const filteredVideos = videos.filter((video) => video.category === filterInput);
			return filteredVideos;
		}
		return videos;
	};

	const filteredVideos = filterHandler(videos, filterInput);

	return (
		<>
			<Header videos={videos} />
			<div className={`pg-defaults ${styles.homePg}`}>
				<Filters setFilterInput={setFilterInput} />
				<CardContainer>
					{loading ? (
						<Loader />
					) : filteredVideos.length > 0 ? (
						filteredVideos.map((video) => (
							<li key={video._id}>
								<VideoCard {...video} videos={videos} />
							</li>
						))
					) : (
						<div className={styles.noVideos}>No Videos Found</div>
					)}
				</CardContainer>
			</div>
		</>
	);
};

export { Home };
