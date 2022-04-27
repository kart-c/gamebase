import { Route, Routes, useLocation } from 'react-router-dom';
import {
	Home,
	Login,
	Signup,
	Liked,
	History,
	WatchLater,
	Playlist,
	SinglePlaylist,
	SingleVideo,
} from './pages';
import { Aside, Header } from './components';
import './App.css';

function App() {
	const location = useLocation();

	return (
		<>
			<Header />
			{location.pathname !== '/login' &&
			location.pathname !== '/signup' &&
			!location.pathname.includes('/explore/') ? (
				<Aside />
			) : null}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/liked" element={<Liked />} />
				<Route path="/history" element={<History />} />
				<Route path="/watchlater" element={<WatchLater />} />
				<Route path="/playlist" element={<Playlist />} />
				<Route path="/playlist/:_id" element={<SinglePlaylist />} />
				<Route path="/explore/:_id" element={<SingleVideo />} />
			</Routes>
		</>
	);
}

export default App;
