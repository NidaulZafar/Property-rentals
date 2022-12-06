import React, { useState } from 'react';
import useFetch from '../../components/Hooks/useFetch';
import loading from '../../assets/loading.svg';
import { useParams } from 'react-router-dom';
import Rental from '../../components/Rental';
import * as Constants from '../../Constants';


const PropertyList = () => {

    const [rentals, setRentals] = useState([]);
    const { id } = useParams();
    const { MAIN_URL, SMALL_HOUSE_URL, VACATION_HOUSE_URL, BIG_HOUSE_URL } = Constants;

    const url = id === undefined ? MAIN_URL
        : id === '1' ? SMALL_HOUSE_URL
            : id === '2' ? VACATION_HOUSE_URL
                : BIG_HOUSE_URL;

    const { error, isLoading } = useFetch(url, setRentals);
    
    return (
        <div className='property-list-main'>
            {isLoading ? <img src={loading} alt='Loading...' /> : error ?
                <h2>{error}</h2> :
                <div className='properties'>
                    {rentals.map((rental) => (
                        <Rental property={rental} />
                    ))}
                </div>                
            }            
        </div>
    )
}

export default PropertyList;