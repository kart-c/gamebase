import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={`header ${styles.header}`}>
			<h2>GAMEBASE</h2>
			<input type="search" name="search" className="header-search" placeholder="Search..." />
			<a href="">Login</a>
		</header>
	);
};

export { Header };
