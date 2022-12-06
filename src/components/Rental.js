import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faToilet } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Hooks/useAppContext';





const Rental = ({property}) => {

    const { id, image_url, name, maxGuests, bathrooms, nightly_price } = property;
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const navigate = useNavigate();

    const favoritesChecker = (id) => {
        const boolean = favorites.some(rental => rental.id === id);
        return boolean;
    }
    
    return (
        <div className='outer-container'>
            <div className="property-container" style={{ backgroundImage: `url(${image_url})` }}>
                <div className='overlay' onClick={() => navigate(`/properties/${id}`)}>
                    <h2 className='property-title'>{name}</h2>
                </div>
            </div>
            <div className='lower-div'>
                <div className='max-users'>
                    <FontAwesomeIcon icon={faUsers} style={{ color: 'gray', fontSize: '15px' }} />
                    <span>{maxGuests}</span>
                </div>
                <div className='bathrooms'>
                    <FontAwesomeIcon icon={faToilet} style={{ color: 'gray', fontSize: '15px' }} />
                    <span> {bathrooms}</span>
                </div>
                <div className='nightly-price'>
                    <h4>&#x20AC;{nightly_price} / night</h4>
                </div>
                {favoritesChecker(id) ?
                    <button className='button' onClick={() => removeFromFavorites(id)}>
                        Unlike
                    </button>
                    :
                    <button className='button' onClick={() => addToFavorites(property)}>
                        Like
                    </button>
                }
            </div>
        </div>
    )
}

export default Rental;