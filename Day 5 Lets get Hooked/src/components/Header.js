import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
const Header = () => {
  const btnName = "Log In";
  const [buttonName , setBtnName] = useState(btnName);

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
              <p>🛒Cart</p>
              <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-200"></div>
            </Link></li>
            
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