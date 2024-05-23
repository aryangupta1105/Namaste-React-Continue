

const MenuInfoCard = (props) =>{
    const {MenuData} = props;
    const{
        name,
        price, 
        defaultPrice,
        imageId,
        description
    } = MenuData.card.info;
    
    return (
        <li className="w-full my-5 border-t border-t-gray-300">
            <div className="flex flex-row-reverse mt-5 items-center justify-between">
                <img className="w-[239px] rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +imageId}></img>
                <div>
                <h4 className="font-bold ">{name}</h4>
                <p className="font-bold">{"Rs " + (price / 100 || defaultPrice / 100)}</p>
                <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </li>
    )
}

export default MenuInfoCard;