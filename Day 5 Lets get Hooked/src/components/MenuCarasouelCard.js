const MenuCarasouelCard = (props) =>{
    const {MenuData} = props;
    const{
        name,
        price, 
        defaultPrice,
        imageId,
        description,
        isVeg
    } = MenuData.dish.info;
    
    return (
        <li className="w-full border-b border-t-gray-300">
            <div className="flex justify-between my-5 flex-row-reverse items-center pb-5">
                {/* image section */}
                <div className="relative">
                <img className="w-[239px] rounded-3xl border" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +imageId} alt={name}></img>

                <button className="p-2 rounded-lg bg-white text-green-700 border w-[100px] rounded-3xl absolute -bottom-5 font-bold text-[1.5rem] left-[30%]">Add</button>

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

export default MenuCarasouelCard;