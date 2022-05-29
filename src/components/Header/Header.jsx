import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, useLikes, usePlaylists, useWatchLater } from '../../context';
import styles from './Header.module.css';

const Header = ({ videos }) => {
	const [searchInput, setSearchInput] = useState('');
	const [searchList, setSearchList] = useState([]);
	const [isDebouncing, setIsDebouncing] = useState(false);
	const timerRef = useRef();
	const navigate = useNavigate();
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

	useEffect(() => {
		if (searchInput) {
			clearTimeout(timerRef.current);
			if (searchInput !== 0) {
				setIsDebouncing(false);
				timerRef.current = setTimeout(() => {
					const searchedProducts = videos.filter(
						(video) =>
							video.title.toLowerCase().includes(searchInput.toLowerCase()) ||
							video.channelName.toLowerCase().includes(searchInput.toLowerCase())
					);
					setSearchList(searchedProducts);
					setIsDebouncing(true);
				}, 300);
			}
		}
	}, [searchInput]);

	return (
		<header className={`header ${styles.header}`}>
			<h2>
				<Link to="/">GAMEBASE</Link>
			</h2>
			<div className={styles.searchContainer}>
				{location.pathname === '/' && (
					<input
						type="search"
						name="search"
						className="header-search"
						placeholder="Search..."
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				)}
				{searchInput && isDebouncing ? (
					<ul className={styles.searchList}>
						{searchList.length > 0
							? searchList.map((listItem) => (
									<li
										key={listItem._id}
										onClick={() => {
											navigate(`/explore/${listItem._id}`);
											setSearchValue('');
										}}
									>
										{listItem.title}
									</li>
							  ))
							: 'No videos found'}
					</ul>
				) : null}
			</div>
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
