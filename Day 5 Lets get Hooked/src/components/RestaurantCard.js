import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
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
      <div className="res-content flex flex-col gap-[10px]" >
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
        </div>
      </div>
    );
  };
  

export default RestaurantCard;