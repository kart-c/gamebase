import React from 'react';
import styles from './CardContainer.module.css';

const CardContainer = ({ children }) => {
	return <ul className={styles.cardContainer}>{children}</ul>;
};

export { CardContainer };
