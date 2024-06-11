import { useContext } from "react";
import { CDN_URL } from "../utils/Constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    // Context using example
    // const {userName} = useContext(UserContext);
    console.log(resData);
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      locality, 
      areaName,
      badges
    } = resData?.info;

    return (
      /*
       .res-content div{
                  padding: 10px;
              }
              .res-content{
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
              }
              .res-card img
              {
                  width: 100%;
                  height: 233px;
                  border-radius: 10px;
              }
              .res-card:hover{
                  cursor: pointer;
                  scale: 0.9;
            }
       */
      <div data-testid="resCard" className="res-content flex flex-col gap-[10px]" >
        <img
          className="res-logo w-full h-[233px] rounded-lg"
          // src={
          //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7' +
          //   resData.data.cloudinaryImageId
          // }
  
          // Concatenated the link with the Image id to fetch image from cdn
          src={CDN_URL + cloudinaryImageId
          }
          alt={name + " image"}
        />
        {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
  
        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(', ')}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
        
        <h4>{resData.data.deliveryTime} minutes</h4> */
        }
        <div className="p-[10px]">
        <h3>{name}</h3>
        <p>⭐{avgRating} stars - <span>{sla.slaString} minutes</span></p>
        <p>Cuisine: <span>{cuisines.join(', ')}</span></p>
        <p>Address: <span>{areaName}, {locality}</span></p>
        
        {/* using context for learning */}
        {/* <h2>{userName}</h2>   */}

        </div>
      </div>
    );
  };


export const withRecommendedLabel = (RestaurantCard)=>{
      return (props)=>{
        return (
          <div>
            <label className="absolute -left-4 rounded-l-none bg-green-400 p-2 px-4 rounded-lg">Recommended</label>
            <RestaurantCard {...props}></RestaurantCard>
          </div>
        )
      }
  }

export const RestaurantChainCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    areaName,
  } = resData?.info;

  return (
    <div className="res-content w-[280px] h-[300px] flex flex-col gap-4 mb-5">
      <img
        className="res-logo rounded-lg w-[280px] h-[200px] shadow-inner" 
        src={CDN_URL + cloudinaryImageId}
        alt={name + " image"}
      />
      
      <div className="p-2">
        <h3 className="text-lg font-bold text-gray-700">{name}</h3>
        <p className="text-gray-600">⭐ {" " + avgRating} stars ~ <span>{sla.slaString} minutes</span></p>
        <p className="text-gray-500">🛑{areaName}</p>
      </div>
    </div>
  );
};
  

export default RestaurantCard;