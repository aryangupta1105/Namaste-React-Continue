import React from "react";
import ReactDOM from "react-dom";

/* React Components:
-Header
    -Logo
    -NavItems
        -Home 
        -About
        -Contact Us
    -Cart Button
-Body
    -Search Bar
    -Restaurant Container
        -Restaurant Cards
            -Name
            -Review
            -Cusines
            -Delivery Time
            -Cost of Two
-Footer
    -Copyright
    -Hyperlinks
    -Address
    -Contact
*/
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name , review} = resData;
    return(
        <div className="resCard">
            <img src="Day 4 Talk is cheap show me the code\food.jpeg"></img>
            <h1>{name}</h1>
            <h1>{review}</h1>
        </div>
    )
}
const Header = () =>{
    return(
        <div className="header">
            <img src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"></img>
            <ul className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><a href="#">Cart 👍</a></li>
            </ul>
        </div>
    )
};

const resList =[ {
    name : "Aryan foods",
    review : "4.3",

},{
    name : "Nalayak foods",
    review : "4.3",

},{
    name : "Fast foods",
    review : "4.3",

},{
    name : "Vivek foods",
    review : "4.3",

}]

const AppLayout = () =>
{
    return(
        <div className="app">
            <Header/>
            <div>
                <input type="text" placeholder="search restaurant" ></input>
                <button type="submit" >Search</button>
                <div className="resContainer">
                 {resList.map( (restaurant , index) =>(
                    <RestaurantCard resData={restaurant} key={index}></RestaurantCard>
                ))}
            </div>
            </div>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);