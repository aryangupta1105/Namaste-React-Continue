import React from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            jsonData: {},
            isLoading: true
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/aryangupta1105');
        const json = await data.json();
        console.log(json);
        this.setState({
            jsonData : json,
            isLoading: false
        });
    }
    
    
    render(){
        const {name , location,bio , html_url, followers ,followers_url , following_url, following , avatar_url , company} = this.state.jsonData;
        const{isLoading} = this.state;
        if(isLoading) return <Shimmer/>;
        return(
           <div className="user-class-component w-[90%] px-6 my-10 flex mx-auto justify-center">
                
                {/* left part */}
                  <div className="w-6/12 flex flex-col ">
                        <h1 className="text-[2rem] font-extrabold text-blue-500">{name}</h1>
                        <h2 className="font-bold mt-3 text-lg">{location}</h2>
                        <p className="text-gray-500 w-10/12">{bio}</p>

                        <div className="flex justify-between pr-10 mt-5">
                            <p>Followers: <a href={followers_url}>{followers}</a></p>
                            <p>Following: <a href={following_url}>{following}</a></p>
                        </div>

                        <h3 className="mt-5 w-10/12">Company: Student @{company}</h3>
                  </div>

                  <div className="w-6/12">
                        <img src={avatar_url} className="h-[70%] border rounded-lg"></img>
                  </div>
               
           </div>
        )
    }
}

export default UserClass;