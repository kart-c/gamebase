import { useState } from 'react';
import styles from './HorizontalCard.module.css';

const HorizontalCard = ({ videoThumbnail, title, channelName, time }) => {
	const [isVisible, setIsVisible] = useState(false);

	const optionsHandler = () => setIsVisible((prev) => !prev);

	return (
		<article className={styles.hrCard}>
			{isVisible && (
				<div className={styles.menu}>
					<button>Remove from likes</button>
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
