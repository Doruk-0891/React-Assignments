import { RESTAURANT_LIST } from '../../utils/mockData';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

export const Restaurants = () => {
    const [searchInput, setSearchInput] = useState('');
    const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST);
    const [isNoResultsFound, setIsNoResultsFound] = useState(false);
    searchRestaurant = () => {
        let filteredList = [];
        if (searchInput.trim() === '' && restaurantList.length !== RESTAURANT_LIST.length) {
            setRestaurantList(RESTAURANT_LIST);
            return;
        }
        filteredList = restaurantList.filter((restaurant) => {
            return restaurant.info.name.trim().toLowerCase().includes(searchInput.trim().toLowerCase())
        });
        if (filteredList.length) {
            setIsNoResultsFound(false);
            setRestaurantList(filteredList);
        } else {
            setIsNoResultsFound(true);
        }
    }
    return (
        <>
            {
                isNoResultsFound ?
                <div >
                    <h3>No Results Found.</h3> 
                    <p>We have lot of restaurants that made delicious food.🍰</p>
                    <p>Try them out, you will love it.</p>
                </div> : ''
            }
            <div className="search-bar">
                <button onClick={() => searchRestaurant()}><BiSearch /></button>
                <input type="text" placeholder='Search by restaurant...' name='searchInput' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
            </div>
            <div className="restaurants-container">
                {
                    restaurantList.map((restaurant) => {
                        return <RestaurantCard restaurantDetail={restaurant} key={restaurant?.info.resId} />
                    })
                }
            </div>
        </>
    );
}