import { useEffect , useState } from "react";

const useFoodDeliveryData = (lat , long ,setLoading , setFilteredRestaurants ,setfoodDeliveryHeading , setTopFoodData, setTopFoodHeading , setRestaurantsChains , setRestaurantsChainsHeading)=>{
  const [listRestaurants, setListRestaurants] = useState([]);
    
  useEffect(()=>{
    fetchData();
  },[lat , long]);

  const fetchData = async ()=>{
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
      console.log(json);
      const deliveryData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setTopFoodData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info); 
      setTopFoodHeading(json?.data?.cards[0]?.card?.card?.header?.title);

      setRestaurantsChains(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setRestaurantsChainsHeading(json?.data?.cards[1]?.card?.card?.header?.title)

      
      setfoodDeliveryHeading(json?.data?.cards[2]?.card?.card?.title || "Top Restaurant Chains");
      setListRestaurants(deliveryData);
      setFilteredRestaurants(deliveryData);

    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoading(false);
  }

  return listRestaurants;
}

export default useFoodDeliveryData;