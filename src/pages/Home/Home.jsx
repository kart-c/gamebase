import React from 'react';
import { CardContainer, VideoCard } from '../components';

const Home = () => {
	return (
		<div className="pg-defaults">
			<CardContainer>
				<li>
					<VideoCard />
				</li>
				<li>
					<VideoCard />
				</li>
				<li>
					<VideoCard />
				</li>
				<li>
					<VideoCard />
				</li>
				<li>
					<VideoCard />
				</li>
			</CardContainer>
		</div>
	);
};

export { Home };
