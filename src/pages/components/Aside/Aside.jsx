import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Aside.module.css';

const Aside = () => {
	return (
		<aside className={styles.aside}>
			<nav>
				<ul className={styles.sideNav}>
					<li>
						<Link to="/">
							<i className="fa-solid fa-compass"></i>
							Explore
						</Link>
					</li>
					<li>
						<Link to="/">
							<i className="fa-solid fa-list-ul"></i>
							Playlists
						</Link>
					</li>
					<li>
						<Link to="/">
							<i className="fa-solid fa-clock"></i>
							Watch Later
						</Link>
					</li>
					<li>
						<Link to="/">
							<i className="fa-solid fa-thumbs-up"></i>
							Liked
						</Link>
					</li>
					<li>
						<Link to="/">
							<i className="fa-solid fa-clock-rotate-left"></i>
							History
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export { Aside };
