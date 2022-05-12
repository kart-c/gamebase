import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader, PlaylistModal } from '../../components';
import { useAuth, useHistory, useLikes, useWatchLater } from '../../context';
import {
	addToHistory,
	addToWatchLater,
	deleteLike,
	deleteWatchLater,
	getVideo,
	likesHandler,
	removeFromHistory,
} from '../../utils';
import styles from './SingleVideo.module.css';

const SingleVideo = () => {
	const [currentVideo, setCurrentVideo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showMore, setShowMore] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [modalActive, setModalActive] = useState(false);
	const [playlistVideo, setPlaylistVideo] = useState(null);
	const [btnLoading, setBtnLoading] = useState({
		likes: false,
		watchLater: false,
		playlist: false,
	});
	const params = useParams();
	const {
		likesState: { likes },
		likesDispatch,
	} = useLikes();
	const {
		authState: { token },
	} = useAuth();
	const {
		watchLaterState: { watchlater },
		watchLaterDispatch,
	} = useWatchLater();
	const {
		historyState: { history },
		historyDispatch,
	} = useHistory();
	const navigate = useNavigate();

	useEffect(() => {
		getVideo(params._id, setCurrentVideo, setIsLoading);
	}, []);

	const videoExists = likes.some((video) => video._id === currentVideo?._id);

	const likeBtnHandler = (_id) => {
		if (token) {
			if (videoExists) {
				deleteLike({ _id, token, likesDispatch, setBtnLoading, setIsVisible });
			} else {
				likesHandler({ token, video: currentVideo, likesDispatch, setBtnLoading, setIsVisible });
			}
		} else {
			navigate('/login');
		}
	};

	const watchlaterExists = watchlater.some((video) => video._id === currentVideo?._id);

	const watchLaterHandler = (_id) => {
		if (token) {
			if (watchlaterExists) {
				deleteWatchLater({ _id, token, watchLaterDispatch, setBtnLoading, setIsVisible });
			} else {
				addToWatchLater({
					token,
					video: currentVideo,
					watchLaterDispatch,
					setBtnLoading,
					setIsVisible,
				});
			}
		} else {
			navigate('/login');
		}
	};

	const playlistHandler = (_id) => {
		if (token) {
			setIsVisible(false);
			setModalActive(true);
			setPlaylistVideo(currentVideo);
		} else {
			navigate('/login');
		}
	};

	const historyHandler = (_id) => {
		if (token) {
			const inHistory = history.some((video) => video._id === _id);
			if (inHistory) {
				removeFromHistory(token, _id, historyDispatch);
				addToHistory(token, currentVideo, historyDispatch);
			} else {
				addToHistory(token, currentVideo, historyDispatch);
			}
		}
	};

	return (
		<div className="pg-defaults">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className={styles.videoWrapper}>
						{modalActive && (
							<PlaylistModal setModalActive={setModalActive} playlistVideo={playlistVideo} />
						)}
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${currentVideo._id}`}
							controls
							height="40rem"
							width="100%"
							onStart={() => historyHandler(currentVideo._id)}
						/>
						<div className={styles.detailContainer}>
							<h4>{currentVideo.title}</h4>
							<div className={styles.videoDetails}>
								<span>{currentVideo.viewCount}</span>
								<button className={styles.options} onClick={() => setIsVisible((prev) => !prev)}>
									<i className="fa-solid fa-ellipsis-vertical"></i>
								</button>
								<div className={`${styles.btnContainer} ${isVisible && styles.active}`}>
									<button
										className={`btn btn-primary ${videoExists && styles.btnActive}`}
										onClick={() => likeBtnHandler(currentVideo._id)}
										disabled={btnLoading.likes}
									>
										<i className="fa-solid fa-thumbs-up"></i>
										{videoExists ? 'Unlike' : 'Like'}
									</button>
									<button
										className={`btn btn-primary ${watchlaterExists && styles.btnActive}`}
										onClick={() => watchLaterHandler(currentVideo._id)}
										disabled={btnLoading.watchLater}
									>
										<i className="fa-solid fa-clock"></i>
										{watchlaterExists ? 'Remove from Watch Later' : 'Add to Watch Later'}
									</button>
									<button
										className="btn btn-primary"
										onClick={() => playlistHandler(currentVideo._id)}
									>
										<i className="fa-solid fa-list-ul"></i>
										Playlist
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
