import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import { getVideo } from '../../utils';
import styles from './SingleVideo.module.css';

const SingleVideo = () => {
	const [currentVideo, setCurrentVideo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();

	useEffect(() => {
		getVideo(params._id, setCurrentVideo, setIsLoading);
	}, []);

	console.log(currentVideo);

	return (
		<div className={styles.pg}>
			{isLoading ? (
				'Loading'
			) : (
				<div className={styles.videoWrapper}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${currentVideo._id}`}
						controls
						height="100%"
						width="100%"
					/>
					<div className={styles.detailContainer}>
						<h4>{currentVideo.title}</h4>
						<div className={styles.videoDetails}>
							<span>{currentVideo.viewCount}</span>
							<div className={styles.btnContainer}>
								<button className="btn btn-primary">
									Like
									<i className="fa-solid fa-thumbs-up"></i>
								</button>
								<button className="btn btn-primary">
									Watch Later
									<i className="fa-solid fa-clock"></i>
								</button>
								<button className="btn btn-primary">
									Playlist
									<i className="fa-solid fa-list-ul"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export { SingleVideo };
