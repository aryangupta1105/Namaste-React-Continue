import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
const Header = () => {
  const btnName = "Log In";
  const [buttonName , setBtnName] = useState(btnName);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={"https://th.bing.com/th/id/OIP.Wuvdo65dj7ghMoYmCtCCGgHaHa?rs=1&pid=ImgDetMain"}
            alt="App Logo"
            className="logo"
          />
          <h3 className="logo-head">Foodie Hustle</h3>
        </div>
        <div className="nav-items">
          <ul className="item-container">
            {/* <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>🛒Cart</li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">🛒Cart</Link></li>
            
            <a to="/loginform"><button className="login-btn" onClick={() =>{
              // We call this setBtnName to re-render the UI
              buttonName === "Log In"?setBtnName("Log Out") : setBtnName("Log In");
            }}>{buttonName}</button></a>
          </ul>
        </div>
      </div>
    );
  };


export default Header;