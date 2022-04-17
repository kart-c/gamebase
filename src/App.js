import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages';
import { Aside, Header } from './pages/components';

function App() {
	return (
		<>
			<Header />
			<Aside />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
