import { useState, useEffect } from 'react';
import { getVideos } from '../../utils/get-videos';
import { CardContainer, Filters, Header, VideoCard } from '../../components';
import styles from './Home.module.css';

const Home = () => {
	const [searchInput, setSearchInput] = useState('');
	const [videos, setVideos] = useState([]);
	const [filterInput, setFilterInput] = useState('');

	useEffect(() => {
		getVideos(setVideos);
	}, []);

	const searchHandler = (videos, searchInput) => {
		if (searchInput) {
			const searchResult = videos.filter((video) =>
				video.title.toLowerCase().includes(searchInput.toLowerCase().trim())
			);
			return searchResult;
		}
		return videos;
	};

	const filterHandler = (videos, filterInput) => {
		if (filterInput) {
			const filteredVideos = videos.filter((video) => video.category === filterInput);
			return filteredVideos;
		}
		return videos;
	};

	const filteredVideos = filterHandler(videos, filterInput);

	const searchedVideos = searchHandler(filteredVideos, searchInput);

	return (
		<>
			<Header
				searchHandler={searchHandler}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
			/>
			<div className={`pg-defaults ${styles.homePg}`}>
				<Filters setFilterInput={setFilterInput} />
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
