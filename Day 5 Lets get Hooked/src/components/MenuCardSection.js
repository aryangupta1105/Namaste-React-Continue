
import MenuCarasouelCard from "./MenuCarasouelCard";
import MenuInfoCard from "./MenuInfoCard";

const MenuCardSection = ({newCard})=>{
    
    return (
            <div className="menu-card-container flex flex-col gap-10 " key={newCard.card.card.id}>
                {/* newCard is the card like recommended etc.  from the list of menuCards */}
                {/* Accordion */}
                <div className="w-full bg-gray-100 shadow-lg  p-2 px-4 "> 

                    <div className="flex justify-between items-center">

                        <h2 className="text-[1.5rem] font-bold ">{newCard.card.card.title}</h2>
                        <span  className="cursor-pointer ">🔽</span>

                    </div>

                    <ul className="menu-card flex flex-col gap-10 ">
                    {/* This is the list of items in each card */}
                    {/* Some cards data is in itemcards */}
            {newCard.card?.card?.itemCards ? (
                        // Render itemCards if they exist
                        newCard.card.card.itemCards.map(item => (
                            <MenuInfoCard key={item.card.info.id} MenuData={item}></MenuInfoCard>

                        ))
                        //some items data is in carousel
                    ) : newCard.card?.card?.carousel ? (
                        newCard.card.card.carousel.map(item => (
                            
                            <MenuCarasouelCard key={item.dish.info.id} MenuData={item}></MenuCarasouelCard>
                           
                        ))
                        //some items data is in categories
                    ) : newCard.card?.card?.categories ? (
                       
                        newCard.card.card.categories.map(item => (
                            item.itemCards.map(newItem => (
                               <MenuInfoCard key={newItem.card.info.id} MenuData={newItem}></MenuInfoCard>
                            ))
                        ))
                    ) : (
                        // Render a default message if neither itemCards nor carousel exist
                        <p>No items or carousel available</p>
                    )}
                </ul>
                </div>

                {/* Accordion Body Section */}
                
                
            </div>
            )
          
}

export default MenuCardSection;