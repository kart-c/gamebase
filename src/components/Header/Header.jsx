import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={`header ${styles.header}`}>
			<h2>GAMEBASE</h2>
			<input type="search" name="search" className="header-search" placeholder="Search..." />
			<Link to="/login">Login</Link>
		</header>
	);
};

export { Header };
