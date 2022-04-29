import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {
	AuthProvider,
	HistoryProvider,
	LikesProvider,
	PlaylistsProvider,
	WatchLaterProvider,
} from './context';
import { makeServer } from './server';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<LikesProvider>
				<WatchLaterProvider>
					<PlaylistsProvider>
						<HistoryProvider>
							<AuthProvider>
								<App />
							</AuthProvider>
						</HistoryProvider>
					</PlaylistsProvider>
				</WatchLaterProvider>
			</LikesProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
