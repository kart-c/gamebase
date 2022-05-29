import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, useLikes, usePlaylists, useWatchLater } from '../../context';
import styles from './Header.module.css';

const Header = ({ searchInput, setSearchInput }) => {
	const {
		authState: { token },
		authDispatch,
	} = useAuth();
	const location = useLocation();
	const { likesDispatch } = useLikes();
	const { playlistsDispatch } = usePlaylists();
	const { watchLaterDispatch } = useWatchLater();

	const logoutHandler = () => {
		toast.success('Logged out successfully');
		authDispatch({ type: 'LOGOUT' });
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		likesDispatch({ type: 'CLEAR' });
		playlistsDispatch({ type: 'CLEAR' });
		watchLaterDispatch({ type: 'CLEAR' });
	};

	const inputHandler = (e) => {
		setSearchInput(e.target.value);
	};

	return (
		<header className={`header ${styles.header}`}>
			<h2>
				<Link to="/">GAMEBASE</Link>
			</h2>
			{location.pathname === '/' && (
				<input
					type="search"
					name="search"
					className="header-search"
					placeholder="Search..."
					value={searchInput}
					onChange={inputHandler}
				/>
			)}
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
