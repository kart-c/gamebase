import React from 'react';
import styles from './HrCardWrapper.module.css';

const HrCardWrapper = ({ children }) => {
	return <ul className={styles.list}>{children}</ul>;
};

export { HrCardWrapper };
