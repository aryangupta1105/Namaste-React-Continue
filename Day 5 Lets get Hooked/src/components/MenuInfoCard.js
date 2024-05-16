

const MenuInfoCard = (props) =>{
    const {MenuData} = props;
    const{
        name,
        price, 
        defaultPrice,
        imageId
    } = MenuData.card.info;
    
    return (
        <div >
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +imageId}></img>
            <h4>{name}</h4>
            <p>{"Rs " + (price / 100 || defaultPrice / 100)}</p>
        </div>
    )
}

export default MenuInfoCard;