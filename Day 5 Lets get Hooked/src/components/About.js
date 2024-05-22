import UserClass from "./UserClass";
import React from "react";
import { json } from "react-router-dom";
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
                <div>
                <h1>About Section</h1>
                <h2>This is About Section learned in React Routing Lecture 07.</h2>
                <UserClass className="user-class-component" name="Aryan Gupta" location="Indore"></UserClass>
                
            </div>
        )
    }
}

export default About;

// To study more about react lifecycle 
// See React life Cycle method diagram