import { useState, useEffect } from 'react';
import { getVideos } from '../../utils/get-videos';
import { CardContainer, Header, VideoCard } from '../../components';
import styles from './Home.module.css';

const Home = () => {
	const [searchInput, setSearchInput] = useState('');
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos(setVideos);
	}, []);

	const searchHandler = (videos, searchInput) => {
		const searchResult = videos.filter((video) =>
			video.title.toLowerCase().includes(searchInput.toLowerCase().trim())
		);
		return searchResult;
	};

	const searchedVideos = searchHandler(videos, searchInput);

	return (
		<>
			<Header
				searchHandler={searchHandler}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
			/>
			<div className="pg-defaults">
				<CardContainer>
					{searchedVideos.length > 0 ? (
						searchedVideos.map((video) => (
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
