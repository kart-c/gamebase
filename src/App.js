import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home, Login, Signup } from './pages';
import { Aside, Header } from './components';

function App() {
	const location = useLocation();

	return (
		<>
			<Header />
			{location.pathname !== '/login' && location.pathname !== '/signup' ? <Aside /> : null}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</>
	);
}

export default App;
