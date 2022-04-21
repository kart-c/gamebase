import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Aside.module.css';

const Aside = () => {
	return (
		<aside className={styles.aside}>
			<nav>
				<ul className={styles.sideNav}>
					<li>
						<Link to="/" title="Explore">
							<i className="fa-solid fa-compass"></i>
							<span>Explore</span>
						</Link>
					</li>
					<li>
						<Link to="/playlist" title="Playlists">
							<i className="fa-solid fa-list-ul"></i>
							<span>Playlists</span>
						</Link>
					</li>
					<li>
						<Link to="/watchlater" title="Watch Later">
							<i className="fa-solid fa-clock"></i>
							<span>Watch Later</span>
						</Link>
					</li>
					<li>
						<Link to="/liked" title="Liked">
							<i className="fa-solid fa-thumbs-up"></i>
							<span>Liked</span>
						</Link>
					</li>
					<li>
						<Link to="/history" title="History">
							<i className="fa-solid fa-clock-rotate-left"></i>
							<span>History</span>
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export { Aside };
