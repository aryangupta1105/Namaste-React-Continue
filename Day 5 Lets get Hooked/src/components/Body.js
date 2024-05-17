import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import './Body.css';
import {API_KEY} from "../utils/Constants";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [headingRestaurant, setHeadingRestaurant] = useState("Top Restaurant Chains");
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch data when lat or long changes
  useEffect(() => {
    fetchData();
  }, [lat, long]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("No geolocation support!");
    }
  };

  const showPosition = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };

  const fetchLatLong = async () => {
    if (!address) {
      console.log("Address is empty");
      return;
    }

    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${API_KEY}`
      );
      const json = await response.json();
      if (json.length > 0) {
        setLat(parseFloat(json[0].lat));
        setLong(parseFloat(json[0].lon));
      } else {
        console.log("No results found for the given address.");
      }
    } catch (error) {
      console.error("Error fetching geocoding data: ", error);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
      const newData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(json?.data);
      setHeadingRestaurant(json?.data?.cards[1]?.card?.card?.header?.title || "Top Restaurant Chains");
      setListRestaurants(newData);
      setFilteredRestaurants(newData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <Shimmer />;
  }
    console.log("body rendering");

    console.log(listRestaurants);

    return (
      <div className="body">
        <div className="main-container">
          <div className="top-container">
          <h1 className="Heading-body">
          {headingRestaurant} 
        </h1>
            {/* Here the body is rendering every time the value updates (which is the property of useState variable/hook) */}
          <div>
            
                <input type="text" name="search-city" placeholder="Search City " value={address} onChange={(e)=>{
                  setAddress(e.target.value);
                }} />
                {/* Adding search Button functionalities */}
                <button className="search-btn" onClick={()=>{
                  fetchLatLong();
                  
                }} >Search🔍</button>
              
          </div>
          </div>
        
        <div  className="search-container">
              <input type="text" name="search-res" placeholder="Search Food or Restaurant" value={searchValue} onChange={(e)=>{
                      setSearchValue(e.target.value);
                    }} />
                    {/* Adding search Button functionalities */}
                    <button className="search-btn" onClick={()=>{
                      const filteredList = listRestaurants.filter((res)=> (res.info.name).toLowerCase().includes(searchValue.toLowerCase()) );
                      setFilteredRestaurants(filteredList);
                    }} >Search🔍</button>

        </div>
        <button className="filter-btn" 
          onClick={() =>{ 
            const filteredList = filteredRestaurants.filter((res)=> res.info.avgRating > 4
          );
            setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
        </button>
        </div>
        <div className="res-container">
          
          
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
          {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link className="res-card" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <h2>No results found for your Location!</h2>
        )}
  
          
        </div>
      </div>
    );
  };


export default Body;