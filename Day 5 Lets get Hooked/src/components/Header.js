import { LOGO_URL } from "../utils/Constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const btnName = "Log In";
  const [buttonName , setBtnName] = useState(btnName);

  // Redux using : 
  const cartItems = useSelector((store) => store.cart.items);
  // context using example
  const {LoggedIn} = useContext(UserContext);
  
    return (
      <div className="header w-full mx-auto max-w-[1440px] flex justify-between px-10 font-bold items-center py-4 shadow-xlrelative bg-white text-gray-600 ">
        <div className="logo-container relative w-[130px]">
          <img 
            src={"https://th.bing.com/th/id/OIP.Wuvdo65dj7ghMoYmCtCCGgHaHa?rs=1&pid=ImgDetMain"}
            alt="App Logo"
            className="logo w-full"
          />
          <h3 className="logo-head absolute  bottom-[1.2%] left-[10%] text-black font-serif">Foodie Hustle</h3>
        </div>
        <div className="nav-items ">
          <ul className="item-container flex justify-between gap-16 items-center ">
            {/* <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>🛒Cart</li> */}
            <li className="group"><Link to="/">
              <p>Home</p>
              <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
            </Link></li>
            <li className="group"><Link to="/about">
            <p>About Us</p>
              <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
            </Link></li>
            <li className="group"><Link to="/grocery">
              <p>Grocery</p>
              <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
              </Link></li>
            <li className="group"><Link to="/contact">
              <p>Contact Us</p>
              <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
            </Link></li>
            <li className="group"><Link to="/cart">
              <p className="font-extrabold text-xl">🛒Cart ({cartItems.length} items)</p>
              <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
            </Link></li> 

            {/* UserContext using example */}
            {/* <li className="group font-bold text-lg text-black"><Link to="/cart">
              <p>{LoggedIn}</p>
              <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
            </Link></li> */}
            
            <a to="/loginform" className="group"><button className="login-btn" onClick={() =>{
              // We call this setBtnName to re-render the UI
              buttonName === "Log In"?setBtnName("Log Out") : setBtnName("Log In");
            }}>{buttonName}</button>
            <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
            </a>
          </ul>
        </div>
      </div>
    );
  };


export default Header;