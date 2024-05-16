const MenuCarasouelCard = (props) =>{
    const {MenuData} = props;
    const{
        name,
        price, 
        defaultPrice,
        imageId
    } = MenuData.dish.info;
    
    return (
        <div>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +imageId}></img>
                                        {name} - {"Rs " + (price / 100 || defaultPrice / 100)}
        </div>
    )
}

export default MenuCarasouelCard;