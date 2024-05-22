import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import './RestaurantMenu.css';
import MenuInfoCard from "./MenuInfoCard";
import MenuCarasouelCard from "./MenuCarasouelCard";
import { CDN_URL } from "../utils/Constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    
    const menuData = useRestaurantMenu(resId);

    if (menuData === null) return <Shimmer />;

    const { cards } = menuData;

    const card = cards[2]?.card?.card?.info;

    let menuCard =  menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
    
    
    menuCard = menuCard.filter((cardS) => cardS.card.card.title)
    const { name, cuisines, costForTwoMessage ,avgRating , areaName, totalRatingsString, feeDetails ,   } = card;
    console.log(card)
    console.log(feeDetails);

    console.log(menuCard);



    return menuData === null? <Shimmer></Shimmer> :(
        <div className="menu">
            
            <div>
                <h1>{name}</h1>
                <div className="Res-menu-data">
                <h3> {avgRating} ( {totalRatingsString + " "} ){" "} ~ {costForTwoMessage}</h3>
                <h3><a>{cuisines.join(",")}</a></h3>
                <div className="Outlet-container">
                    <h2 className="outletHeading">Outlet <span>{areaName}🔻</span></h2>
                    <h2>40-45 mins</h2>  
                </div>
                
                </div>
            </div>


            <div className="menu-container">  
            {
                menuCard.map(newCard => (
                    <div className="menu-card-container" key={newCard.card.card.id}>
                        <h2>{newCard.card.card.title}</h2>
                        <ul className="menu-card">
                            
                    {newCard.card?.card?.itemCards ? (
                                // Render itemCards if they exist
                                newCard.card.card.itemCards.map(item => (
                                    <li key={item.card.info.id}>
                                        <MenuInfoCard key={item.card.info.id} MenuData={item}></MenuInfoCard>

                                    </li>
                                ))
                            ) : newCard.card?.card?.carousel ? (
                                newCard.card.card.carousel.map(item => (
                                    <li key={item.dish.info.id}>
                                        <MenuCarasouelCard key={item.dish.info.id} MenuData={item}></MenuCarasouelCard>
                                    </li>
                                ))
                            ) : newCard.card?.card?.categories ? (
                               
                                newCard.card.card.categories.map(item => (
                                    item.itemCards.map(newItem => (
                                        <li key={newItem.card.info.id}>
                                            <MenuInfoCard key={newItem.card.info.id} MenuData={newItem}></MenuInfoCard>
                                            
                                        </li>
                                    ))
                                ))
                            ) : (
                                // Render a default message if neither itemCards nor carousel exist
                                <p>No items or carousel available</p>
                            )}
                        </ul>
                    </div>))
            }
            </div>
            
        </div>
    );
};

export default RestaurantMenu;