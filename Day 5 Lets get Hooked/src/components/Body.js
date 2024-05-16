import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import './Body.css';

const Body = () => {
    const [listRestaurants , setListRestaurants] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);
    const [searchValue , setSearchValue] = useState("");
    const [headingRestaurant , setheadingRestaurant] = useState("Top Restaurant Chains");

    
    useEffect(()=>{
      fetchData();
    } , []);
  
    // function definiton:
    const fetchData = async ()=>{
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        
      );
      
      const json = await data.json();
      console.log(json)
      const newData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      resLists = newData;
      setheadingRestaurant(json?.data?.cards[2]?.card?.card?.title)
      setListRestaurants(newData);   
      setFilteredRestaurants(newData);
          };



    // Conditional Rendering
    if(listRestaurants.length === 0){
      return <Shimmer></Shimmer>
    }

    console.log("body rendering");

    console.log(listRestaurants);

    return (
      <div className="body">
        <div className="main-container">
        <h1 className="Heading-body">
          {headingRestaurant}
        </h1>
        <div  className="search-container">
          {/* Here the body is rendering every time the value updates (which is the property of useState variable/hook) */}
          <input type="text" name="search-res" placeholder="Search Food or Restaurant" value={searchValue} onChange={(e)=>{
            setSearchValue(e.target.value);
          }} />
          {/* Adding search Button functionalities */}
          <button className="search-btn" onClick={()=>{
            
            console.log(listRestaurants);
            const filteredList = listRestaurants.filter((res)=> (res.info.name).toLowerCase().includes(searchValue.toLowerCase()) );
            setFilteredRestaurants(filteredList);
            console.log(listRestaurants);
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
          
          {
          /* This is one way to use list 
           <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} /> */}
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {filteredRestaurants.map((restaurant) => (
            <Link className="res-card"  key={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
          ))}
  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  };


export default Body;