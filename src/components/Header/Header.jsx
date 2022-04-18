import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context';
import styles from './Header.module.css';

const Header = () => {
	const {
		authState: { token },
		authDispatch,
	} = useAuth();

	const logoutHandler = () => {
		authDispatch({ type: 'LOGOUT' });
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	};
	return (
		<header className={`header ${styles.header}`}>
			<h2>
				<Link to="/">GAMEBASE</Link>
			</h2>
			<input type="search" name="search" className="header-search" placeholder="Search..." />
			{token ? (
				<button onClick={logoutHandler} className={styles.logoutBtn}>
					Logout
				</button>
			) : (
				<Link to="/login">Login</Link>
			)}
		</header>
	);
};

export { Header };
