import React from 'react';
import { useNavigate } from 'react-router-dom';



const Categories = () => {
    const categories = [
        {
            id: 1,
            suite: 'Honeymoon Suites',
            rooms: 2,
            image_url: 'https://3.imimg.com/data3/UJ/CY/MY-4762533/honeymoon-suite-3000-500x500.jpg'
        },
        {
            id: 2,
            suite: 'Vacation Suites',
            rooms: 3,
            image_url: 'https://deerlakecabins.com/wp-content/uploads/2020/03/DeerLakeCabinsRanchResortHoneymoonHillCabinRanchVacationRentals13.jpg'
        },
        {
            id: 3,
            suite: 'Luxury Villas',
            rooms: 5,
            image_url: 'https://www.travelersjoy.com/blog/bali_vacation_rental_01.png'
        }
    ]

    const navigate = useNavigate();

    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <div key={category.id} className='category-container' style={{ backgroundImage: `url(${category.image_url})` }}>
                    <h2 className='category-title'>{category.suite}</h2>
                    <div className='overlay' onClick={() => {navigate(`/categories/${category.id}`)}}></div>
                </div>
            ))}
        </div>
    )
}


export default Categories;


