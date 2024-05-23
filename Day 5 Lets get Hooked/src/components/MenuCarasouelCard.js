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
            <div className="flex justify-between my-5 flex-row-reverse ">
                <img className="w-[239px] " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +imageId}></img>
                <div>
                <p>{isVeg === 1 ? "🟢" :"🔴"}</p>
                <h4 className="font-bold ">{name}</h4>
                <p className="font-bold">{"Rs " + (price / 100 || defaultPrice / 100)}</p>
                <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </li>
    )
}

export default MenuCarasouelCard;