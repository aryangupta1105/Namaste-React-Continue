
import { useState } from "react";
import MenuCarasouelCard from "./MenuCarasouelCard";
import MenuInfoCard from "./MenuInfoCard";
import ItemList from "./ItemList";

const MenuCardSection = ({newCard ,showItems ,setShowIndex})=>{
        const [pointer , setPointer] = useState("🔽");
        const menuCard = document.querySelector(".menu-card");
        const handleClick = ()=>{
            setShowIndex()
        }

    return (
            <div className="menu-card-container flex flex-col gap-10 " key={newCard.card.card.id}>
                {/* newCard is the card like recommended etc.  from the list of menuCards */}
                {/* Accordion */}
                <div className="w-full bg-gray-100 shadow-lg  p-2 px-4 "> 

                    <div className="flex justify-between items-center cursor-pointer"  onClick={handleClick}>

                        <h2 className="text-[1.5rem] font-bold ">{newCard.card.card.title}</h2>
                        <span  className="cursor-pointer " >{pointer}</span>

                    </div>
                    {/* Accordion Body Section */}
                    {showItems && <ItemList key={newCard.card.card.title} newCard={newCard}></ItemList>}
                </div>

                
                
                
            </div>
            )
          
}

export default MenuCardSection;