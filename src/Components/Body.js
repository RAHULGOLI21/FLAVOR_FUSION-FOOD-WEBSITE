import { RestaurantCard } from "./RestaurantCard";
import restaurants from "../utils/mockRestauantsData";
import { useState } from "react";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => (res.rating > 3.3 && res.rating <= 4.2)
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.resName} resCard={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
