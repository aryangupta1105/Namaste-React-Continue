import UserClass from "./UserClass";
import React from "react";
import { json } from "react-router-dom";
import UserContext from "../utils/UserContext";
// const About = () =>{
//     return (
//         <div>
//             <h1>About Section</h1>
//             <h2>This is About Section learned in React Routing Lecture 07.</h2>
//             <UserClass className="user-class-component" name="Aryan Gupta" location="Indore"></UserClass>
//         </div>
//     )
// }

class About  extends React.Component{
    
    
    render(){

        return(
                <div className="my-10 w-10/12 max-w-[1440px] mx-auto ">
                <h1 className="font-bold text-[2.5rem] text-center">About Section</h1>
                <UserClass className="user-class-component" name="Aryan Gupta" location="Indore"></UserClass>
                
            </div>
        )
    }
}

export default About;

// To study more about react lifecycle 
// See React life Cycle method diagram