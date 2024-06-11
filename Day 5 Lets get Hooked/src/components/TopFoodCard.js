import { CDN_URL } from "../utils/Constants";

const TopFoodCard = ({topFoodData})=>{
    const {
        imageId,
        action,
    } = topFoodData;

    return(
        <img src={CDN_URL + imageId} className="hover:cursor-pointer hover:scale-105 transition-all duration-200 py-5" ></img>
    )
}

export default TopFoodCard;