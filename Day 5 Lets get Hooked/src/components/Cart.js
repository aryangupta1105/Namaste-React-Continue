import { useDispatch, useSelector } from 'react-redux';
import CartInfoCard from './CartInfoCard';
import CartCarasouelCard from './CartCarasouelCard';
import { useEffect, useState } from 'react';
import { clearCart, removeItem } from '../utils/cartSlice';
import MenuInfoCard from './MenuInfoCard';
import MenuCarasouelCard from './MenuCarasouelCard';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice , setTotalPrice] = useState(0);
  
  useEffect(() => {
    // Calculate total price whenever cartItems changes
    let total = 0;
    cartItems.forEach((item) => {
      if (item.card?.info) {
        total += (item.card.info.price || item.card.info.defaultPrice) / 100;
      } else if (item.dish?.info) {
        total += (item.dish.info.price || item.dish.info.defaultPrice) / 100;
      }
    });
    setTotalPrice(total);
  }, [cartItems]);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  const handleRemoveItem = () => {
    dispatch(removeItem());
  }

  return (
    <div className='w-full p-4 max-w-[1440px] mx-auto my-10'>
      <div className='flex  justify-between p-5 px-10'>
        <h2 className='text-center font-bold text-[1.5rem] font-serif '>Your Cart</h2>
        <button className="border shadow-lg p-2 px-4 bg-green-200 hover:bg-green-500 transition-all duration-300 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <button className="border mx-10 shadow-lg p-2 px-4 bg-green-200 hover:bg-green-500 transition-all duration-300 rounded-lg" onClick={handleRemoveItem}>Remove Cart Item</button>
      <div className='px-10 list-none'>
        {cartItems.length > 0 && (
          <>
            {cartItems.map((item, index) => (
              <div key={index}>
                {item.card?.info ? (
                  <MenuInfoCard MenuData={item} />
                ) : item.dish?.info ? (
                  <MenuCarasouelCard MenuData={item} />
                ) : (
                  <p className='text-center'>Unknown item type</p>
                )}
              </div>
            ))}
            <h2>Total Price: {totalPrice} Rs.</h2>
          </>
        )}
        {cartItems.length === 0 && (
          <p className='text-center'>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
