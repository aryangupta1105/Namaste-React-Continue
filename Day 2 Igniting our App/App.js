import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1" , 
{
    class: "heading"
}  ,
 "Cristiano Ronaldo - Biography❤️ "
);
const para1 = React.createElement("p" , {class: "para1" } , 
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti laudantium error repudiandae sequi facilis ipsum sapiente saepe asperiores possimus modi!");
const para2 = React.createElement("p" , {class: "para1" } , 
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti laudantium error repudiandae sequi facilis ipsum sapiente saepe asperiores possimus modi!");
const lineBreak = React.createElement("hr" , {} );

const parent = React.createElement(
    "div" , 
    {id: "parent"} ,
    [
        heading ,
        lineBreak , 
        React.createElement("p" , {} , "~ Hated by millions , Loved by Billions") , 
        para1 , 
        para2 , 
        para1
    ]
);
// This {} is for attributes to the object like id: Syntax-> id: "nacho"
const container = React.createElement("div" , {}  , "");

root.render(parent);