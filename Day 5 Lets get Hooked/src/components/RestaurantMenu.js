import { useContext, useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuInfoCard from "./MenuInfoCard";
import MenuCarasouelCard from "./MenuCarasouelCard";
import { CDN_URL } from "../utils/Constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCardSection from "./MenuCardSection";
import UserContext from "../utils/UserContext";

const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    const [showIndex , setShowIndex] = useState(null);
    // This is calling api to fetch the menu Data
    const menuData = useRestaurantMenu(resId);

    // conditional rendering
    if (menuData === null) return <Shimmer />;

    // Destructuring the menuData fetched from the api call...
    const { cards } = menuData;

    // fetching info from each menuCard to destructure into name etc... 
    const card = cards[2]?.card?.card?.info;


    // to fetch other items getting menu Cards data from menu Data list object...
    let menuCard =  menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


    // const categories = menuCard.filter((cards) => cards?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);


    
    console.log(menuCard);
    // Filtered the list of menu Cards which has some title :
    menuCard = menuCard.filter((cardS) => cardS.card.card.title);


    const { name, cuisines, costForTwoMessage ,avgRating , areaName, totalRatingsString, feeDetails ,   } = card;
    

    console.log(menuCard);




    return menuData === null? <Shimmer></Shimmer> :(
        <div className="menu flex flex-col items-center justify-center w-[800px] max-w-[1440px] mx-auto mt-16">
            
            <div className="w-[1000px]">
                <h1 className="text-[2rem] font-extrabold px-6">{name}</h1>
                
                <div className="w-full p-4 bg-gradient-to-t from-gray-300 to-white rounded-3xl mb-10">
                    
                    <div className="Res-menu-data border border-gray-300 bg-white rounded-3xl py-10 px-6 font-bold text-lg font-serif flex flex-col gap-2">

                    <h3>🌟 {avgRating} ({totalRatingsString + " "} ){" "} ~ {costForTwoMessage}</h3>
                    <h3><a className="text-orange-500 underline cursor-pointer px-2">{cuisines.join(",")}</a></h3>
                    <div className="Outlet-container pl-10 relative">
                        <div className="w-3 bg-gray-300 h-3 rounded-full absolute left-0 top-2"></div>
                        <div className="w-1 bg-gray-300 h-10 absolute left-1 top-4"></div>
                        <div className="w-3 bg-gray-300 h-3 rounded-full absolute left-0 bottom-2"></div>
                        <h2 className="outletHeading w-full  mb-5">Outlet <span className="ml-5 text-gray-500">{areaName}🔻</span></h2>
                        <h2>40-45 mins</h2>  
                    </div>

                </div>
            </div>
            </div>


            <div className="menu-container w-[1000px] flex flex-col gap-10">  
            {
                
                menuCard.map((newCard,index) => (
                    <MenuCardSection key={newCard.card.card.title} newCard={newCard} showItems={index ===showIndex ?true : false} setShowIndex ={()=>setShowIndex(index)} ></MenuCardSection>
                )
                    )
            }
            </div>
            
        </div>
    );
};

export default RestaurantMenu;