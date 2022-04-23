import { useState } from 'react';
import { useAuth, useLikes } from '../../context';
import { deleteLike } from '../../utils';
import styles from './HorizontalCard.module.css';

const HorizontalCard = ({ videoThumbnail, title, channelName, time, _id }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [btnLoading, setBtnLoading] = useState({ likes: false });
	const {
		authState: { token },
	} = useAuth();
	const { likesDispatch } = useLikes();

	const optionsHandler = () => setIsVisible((prev) => !prev);

	const removeFromLikes = (_id) => {
		deleteLike({ _id, token, likesDispatch, setBtnLoading, setIsVisible });
	};

	return (
		<article className={styles.hrCard}>
			{isVisible && (
				<div className={styles.menu}>
					<button onClick={() => removeFromLikes(_id)} disabled={btnLoading.likes}>
						<i className="fa-solid fa-thumbs-down"></i> Remove from likes
					</button>
				</div>
			)}
			<div className={styles.imgContainer}>
				<img src={videoThumbnail} alt={title} className="resp-img" />
				<span>{time}</span>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>{title}</h4>
				<h5>{channelName}</h5>
			</div>
			<button className={`btn-btn-primary ${styles.options}`} onClick={optionsHandler}>
				<i className="fa-solid fa-ellipsis-vertical"></i>
			</button>
		</article>
	);
};

export { HorizontalCard };
