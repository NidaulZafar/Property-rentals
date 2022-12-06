import React from 'react';
import { useAppContext } from '../components/Hooks/useAppContext';
import Rental from '../components/Rental';



const Favorites = () => {
	const { favorites } = useAppContext();
	
	return (
		<div className='property-list-main'>
			<div className='properties'>
				{favorites.length > 0 ? favorites.map((rental) => (
					<Rental property={rental} />
				))
					: <h3 className='no-favorites'>
						Nothing yet! Browse our collection of rentals and save what you like.
					</h3>
				}
			</div>
		</div>
	);
};

export default Favorites;
