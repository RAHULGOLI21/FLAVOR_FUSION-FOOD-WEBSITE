import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

// Whenever state variables update, react triggers reconsiliation cycle(re-renders the whole components)
const Body = () => {
  //I will use update "listOfRestaurants" state variable only once i.e when fetching api data.
  //If it is updated the the original list of restaurants is lost.
  //That is the reson we have create another state variable "filteredRestaurants".
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const apiData = await data.json();
    console.log(
      "apiData ---",
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurants(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // this came into picture for searchBox
    setFilteredRestaurants(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          className="search-box"
          vlaue={searchText}
          onChange={(event) =>
            /* onChange in text we are updating it in "searchText" variable */
            setSearchText(event.target.value)
          }
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            //how many times you search we are not updating "listOfRestaurants" i.e not using setListOfRestaurants.
            //So restaurants we got from API is not lost.
            //If we use "setListOfRestaurants" origin api data is lost, so thats the reason for creating the new state variable.
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.trim().toLowerCase());
            });
            //Understand why setFilteredRestaurants is used instead of "setListOfRestaurants".
            setFilteredRestaurants(filteredList);
          }}
        >
          search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          // We are using "filteredRestaurants" to render because initially it contains all restauants updated in fetchData()
          // Later if any searching is applied then also we only redering the same "filteredRestaurants".
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.info.id}
                resCard={restaurant.info}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;
