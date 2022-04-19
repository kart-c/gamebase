import React from 'react';
import styles from './HorizontalCard.module.css';

const HorizontalCard = () => {
	return (
		<article className={styles.hrCard}>
			<div className={styles.imgContainer}>
				<img src="https://picsum.photos/300" alt="placeholder" className="resp-img" />
				<span>20:05</span>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>Video Title</h4>
				<h5>Channel name</h5>
			</div>
		</article>
	);
};

export { HorizontalCard };
