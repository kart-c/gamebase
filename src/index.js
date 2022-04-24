import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider, LikesProvider, WatchLaterProvider } from './context';
import { makeServer } from './server';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<LikesProvider>
				<WatchLaterProvider>
					<AuthProvider>
						<App />
					</AuthProvider>
				</WatchLaterProvider>
			</LikesProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
