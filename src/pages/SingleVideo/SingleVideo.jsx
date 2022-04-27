import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import { getVideo } from '../../utils';
import styles from './SingleVideo.module.css';

const SingleVideo = () => {
	const [currentVideo, setCurrentVideo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showMore, setShowMore] = useState(false);
	const [optionsVisible, setOptionsVisible] = useState(false);
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
				<>
					<div className={styles.videoWrapper}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${currentVideo._id}`}
							controls
							height="40rem"
							width="100%"
						/>
						<div className={styles.detailContainer}>
							<h4>{currentVideo.title}</h4>
							<div className={styles.videoDetails}>
								<span>{currentVideo.viewCount}</span>
								<button
									className={styles.options}
									onClick={() => setOptionsVisible((prev) => !prev)}
								>
									<i className="fa-solid fa-ellipsis-vertical"></i>
								</button>
								<div className={`${styles.btnContainer} ${optionsVisible && styles.active}`}>
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
						<div className={styles.channelDetailContainer}>
							<img
								src={currentVideo.channelThumbnail}
								alt={currentVideo.channelName}
								className="avatar avatar-sm"
							/>
							<div className={styles.channelDetails}>
								<h4>{currentVideo.channelName}</h4>
								<p className={styles.description}>
									{currentVideo.description.substring(
										0,
										currentVideo.description.length > 150
											? showMore
												? currentVideo.description.length
												: 150
											: currentVideo.description.length
									)}
									{currentVideo.description.length > 150 && (
										<button onClick={() => setShowMore((prev) => !prev)}>
											{showMore ? 'Show Less' : 'Show More'}
										</button>
									)}
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export { SingleVideo };
