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
import { Aside, Header, RequiresAuth } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	const location = useLocation();

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{location.pathname !== '/' && <Header />}
			{location.pathname !== '/login' && location.pathname !== '/signup' ? <Aside /> : null}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />

				<Route
					path="/liked"
					element={
						<RequiresAuth>
							<Liked />
						</RequiresAuth>
					}
				/>
				<Route
					path="/history"
					element={
						<RequiresAuth>
							<History />
						</RequiresAuth>
					}
				/>
				<Route
					path="/watchlater"
					element={
						<RequiresAuth>
							<WatchLater />
						</RequiresAuth>
					}
				/>
				<Route
					path="/playlist"
					element={
						<RequiresAuth>
							<Playlist />
						</RequiresAuth>
					}
				/>
				<Route path="/playlist/:_id" element={<SinglePlaylist />} />
				<Route path="/explore/:_id" element={<SingleVideo />} />
			</Routes>
		</>
	);
}

export default App;
