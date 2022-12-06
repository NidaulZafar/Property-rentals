import React from 'react';
import background from '../assets/background.mp4';
import Categories from '../components/Categories';

const Home = () => {
	return (
		<div className='main'>
			<video src={background} autoPlay loop muted />
			<div className='content'>
				<h1 className='main-title'>Your Dream Vacation</h1>
				<h2 className='main-subtitle'>5000+ villas for rent worldwide</h2>
				<Categories />
			</div>
		</div>
	);
};

export default Home;
