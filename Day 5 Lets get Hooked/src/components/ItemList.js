import MenuInfoCard from "./MenuInfoCard"
import MenuCarasouelCard from "./MenuCarasouelCard"

const ItemList = ({newCard})=>{
    console.log(newCard);
    return(
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
    )
}


export default ItemList;