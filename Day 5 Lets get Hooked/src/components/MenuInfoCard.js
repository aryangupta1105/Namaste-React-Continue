import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuInfoCard = (props) =>{
    const {MenuData} = props;
    const{
        name,
        price, 
        defaultPrice,
        imageId,
        description,
        isVeg
    } = MenuData.card.info;

    const dispatch = useDispatch();


    const handleCartItem = (item)=>{
            dispatch(addItem(item));
    }


    return (
        <li data-testid="menuCard" className="w-full my-5 border-t border-t-gray-300 ">
            <div className="flex flex-row-reverse mt-5 items-center justify-between ">
            <div className="relative ">
                {imageId? <img className="w-[239px] rounded-3xl border" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +imageId} alt={name}></img>
    : <p className="w-[239px] rounded-3xl border" ></p>}
                <div className="absolute -bottom-5 font-bold text-[1.5rem] left-[30%]">
                    <button className="p-2 rounded-lg bg-white text-green-700 border w-[100px] " onClick={() =>
                    handleCartItem(MenuData)
                    }>Add 
                    </button>
                </div>
                
                
                
            </div>


                <div className="w-9/12">
                <p className="font-extrabold">{isVeg === 1 ? <span className="text-green-700">🟢 ~ VEG</span> :<span className="text-red-500">⭕ ~ NON-VEG</span>}</p>
                <h4 className="font-bold ">{name}</h4>
                <p className="font-bold">{"Rs " + (price / 100 || defaultPrice / 100)}</p>
                <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </li>
    )
}

export default MenuInfoCard;