import { useContext, useState } from "react";
import RestaurantCard , {RestaurantChainCard, withRecommendedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import LocationError from "./LocationError";
import {API_KEY} from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import useFoodDeliveryData from "../utils/useFoodDeliveryData";
import TopFoodCard from "./TopFoodCard";
import Loader from "./Loader";

const Body = () => {
  
  const [topFoodData , setTopFoodData] = useState([]);
  const[topfoodHeading , setTopFoodHeading] = useState("Try some of the best!");

  // middle section data:
  const [restaurantChains , setRestaurantsChains] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  const [searchValue, setSearchValue] = useState("");

  const [foodDeliveryHeading, setfoodDeliveryHeading] = useState("Top Restaurant Chains");

  const [restaurantsChainsHeading , setRestaurantsChainsHeading] = useState("Top Restaurant Chains");
  
  // for location api
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  

// I created a custom hook for this fetching restaurant data:
  const deliveryData = useFoodDeliveryData(lat , long , setLoading, setFilteredRestaurants, setfoodDeliveryHeading ,setTopFoodData , setTopFoodHeading , setRestaurantsChains , setRestaurantsChainsHeading) ;
  
  
  const RestaurantCardRecommended = withRecommendedLabel(RestaurantCard);

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

  

  const{LoggedIn , setUserName } = useContext(UserContext);
  if (loading) {
    return (
      <div>
        <Loader></Loader>
        <Shimmer />
      </div>
    );
  }


    return (
      <div className="body px-20 w-full max-w-[1440px] mx-auto">
            {!onlineStatus ? <h1 className="mx-auto text-center text-red-500">Looks like You're Offline. Please Check Internet</h1>: " "}
        <div className="main-container">
        <div  className="search-container flex justify-end py-4 px-6">
          {/* Search by City name container */}
            <div>
              
              <input type="text" name="search-city" placeholder="Search City " className="h-10 px-5 border border-black mr-2 rounded-lg focus:border-red-500" value={address} onChange={(e)=>{
                setAddress(e.target.value);
              }} />
              {/* Adding search Button functionalities */}
              <button className="search-btn hover:bg-green-700 bg-green-300 hover:text-white px-4 p-2 rounded-lg transition-all duration-300" onClick={()=>{
                fetchLatLong();
                
              }} >Search🔍..</button>
            
            </div>
        </div>

        {/* Top Food Container */}
          <div className="px-4 mt-5">
            {topFoodData && topFoodData.length>0?(
              <div>
                  <h1 className="font-bold text-[1.5rem] px-4 ">{topfoodHeading}</h1>
                    <div className="w-[1240px] h-[230px] mx-auto overflow-scroll overflow-y-hidden flex gap-10  hide-scrollbar top-food-container border-b mt-5 rounded-xl">
                      {
                        topFoodData.map((food) => (
                          <TopFoodCard key={food.id} topFoodData={food} />
                        ))
                      }
                    </div>
                </div>
            ):null}
            </div> 

          <div className="mt-10">
            {restaurantChains && restaurantChains.length>0?(
              <div>
                  <h1 className="font-bold text-[1.5rem] px-4 ">{restaurantsChainsHeading}</h1>
                    <div className="w-[1240px] mx-auto overflow-scroll overflow-y-hidden flex hide-scrollbar gap-5 px-4 top-food-container border-b mt-5 rounded-xl">
                      {
                        restaurantChains.map((restaurant) => (
                          <Link className="res-card relative text-sm font-bold transition-all ease-in-out duration-200 hover:cursor-pointer hover:scale-90" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantChainCard resData={restaurant}/>
            </Link>
                        ))
                      }
                    </div>
                </div>
            ):null}
            </div>
    

          <div className="online-food-container my-5 flex flex-col pt-10 px-4">
            <h1 className="Heading-body  text-[1.5rem] font-extrabold my-5">
            {foodDeliveryHeading} 
            </h1>
              {/* Here the body is rendering every time the value updates (which is the property of useState variable/hook) */}
          
        
        
         {/* Search by Restaurant container */}
         <div className="flex justify-between ">

          {/* Filtering Top Rated Restaurants */}
            <button data-testid="filterBtn" className="filter-btn search-btn hover:bg-black hover:text-white px-6 p-2 rounded-xl border border-black transition-all duration-300" 
              onClick={() =>{ 
                const filteredList = filteredRestaurants.filter((res)=> res.info.avgRating > 4
              );
                setFilteredRestaurants(filteredList);
                }}
              >
                Top Rated Restaurants
            </button>

                {/* Search by Restaurant Name container */}
              
              <div>
              <input data-testid="searchByRestaurant" type="text" name="search-res" className="h-10 w-[300px] px-5  border border-black mr-3 rounded-lg focus:border-red-500" placeholder="Search Food or Restaurant" value={searchValue} onChange={(e)=>{
                      setSearchValue(e.target.value);
                    }} />
                    {/* Adding search Button functionalities */}
                    <button className="search-btn hover:bg-green-700 bg-green-300 hover:text-white px-4 p-2 rounded-lg transition-all duration-300" onClick={()=>{
                      const filteredList = deliveryData.filter((res)=> (res.info.name).toLowerCase().includes(searchValue.toLowerCase()) );
                      setFilteredRestaurants(filteredList);
                    }} >Search🔍</button>
              </div>
            </div>
        
        {/* updating context example */}
        {/* <div>
          <input type="text" name="search-city" placeholder="user name " className="h-10 px-5 border border-black mr-5 rounded-lg focus:border-red-500" value={LoggedIn} onChange={(e)=>{
                    setUserName(e.target.value);
                  }} />
        </div> */}

        </div>

        {/* Food Delivery Container */}
        <div className="res-container flex flex-wrap w-full mx-auto px-4 items-center my-10 gap-8">
          
          
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method
           */}

         
          {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            
            <Link className="res-card relative w-[280px] h-[400px] bg-[#f0f0f0] text-sm font-bold transition-all ease-in-out duration-200 hover:cursor-pointer hover:scale-90" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              {restaurant.info.avgRating >= 4.5 || restaurant.info.sla.deliveryTime <= 20 ? <RestaurantCardRecommended resData={restaurant}></RestaurantCardRecommended> : <RestaurantCard resData={restaurant} />}
            </Link>
          ))
        ) : (
          <LocationError ></LocationError>
        )}
  
          
        </div>
        </div>
      </div>
    );
  };


export default Body;