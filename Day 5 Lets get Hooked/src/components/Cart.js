import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = ()=>{
    const cartItem = useSelector((store)=> store.cart.items);

    console.log("CartItem: " );
    console.log( cartItem);
    return(
        <div>
            <ItemList newCard={cartItem}></ItemList>
        </div>
    )
}
export default Cart;