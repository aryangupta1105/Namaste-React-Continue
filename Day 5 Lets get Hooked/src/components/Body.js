import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import LocationError from "./LocationError";
import {API_KEY} from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
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
      <div className="body p-4 mt-5  w-full max-w-[1440px] mx-auto">
            {!onlineStatus ? <h1 className="mx-auto text-center text-red-500">Looks like You're Offline. Please Check Internet</h1>: " "}
        <div className="main-container">
          <div className="top-container my-5 flex justify-between">
          <h1 className="Heading-body text-[2rem] text-green-900 font-bold">
          {headingRestaurant} 
        </h1>
            {/* Here the body is rendering every time the value updates (which is the property of useState variable/hook) */}
          <div className="px-10">
            
                <input type="text" name="search-city" placeholder="Search City " className="h-10 px-5 border border-black mr-5 rounded-lg focus:border-red-500" value={address} onChange={(e)=>{
                  setAddress(e.target.value);
                }} />
                {/* Adding search Button functionalities */}
                <button className="search-btn hover:bg-green-700 bg-green-300 hover:text-white px-4 p-2 rounded-lg transition-all duration-300" onClick={()=>{
                  fetchLatLong();
                  
                }} >Search🔍</button>
              
          </div>
          </div>
        
        <div  className="search-container p-2">
              <input type="text" name="search-res" className="h-10 w-[300px] px-5  border border-black mr-5 rounded-lg focus:border-red-500" placeholder="Search Food or Restaurant" value={searchValue} onChange={(e)=>{
                      setSearchValue(e.target.value);
                    }} />
                    {/* Adding search Button functionalities */}
                    <button className="search-btn hover:bg-green-700 bg-green-300 hover:text-white px-4 p-2 rounded-lg transition-all duration-300" onClick={()=>{
                      const filteredList = listRestaurants.filter((res)=> (res.info.name).toLowerCase().includes(searchValue.toLowerCase()) );
                      setFilteredRestaurants(filteredList);
                    }} >Search🔍</button>

        </div>
        <button className="ml-2 filter-btn search-btn hover:bg-black hover:text-white px-4 p-2 rounded-xl border border-black transition-all duration-300" 
          onClick={() =>{ 
            const filteredList = filteredRestaurants.filter((res)=> res.info.avgRating > 4
          );
            setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
        </button>
        </div>
        <div className="res-container flex flex-wrap w-full mx-auto items-center">
          
          
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method
           */}

         
          {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link className="res-card w-[300px] h-[400px] bg-[#f0f0f0] m-[20px] text-sm font-bold transition-all ease-in-out duration-200 hover:cursor-pointer hover:scale-90" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <LocationError ></LocationError>
        )}
  
          
        </div>
      </div>
    );
  };


export default Body;