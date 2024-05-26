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

        this.setState({
            jsonData : json,
            isLoading: false
        });
    }
    
    
    render(){
        const {name , location,bio , html_url, followers , following , avatar_url } = this.state.jsonData;
        const{isLoading} = this.state;
        if(isLoading) return <Shimmer/>;
        return(
           <div className="user-class-component ">
                <a href={html_url} className="">
                    <div className="w-[700px] bg-blue-200 border-yellow-400 shadow-lg mx-auto border flex-col flex gap-5  rounded-lg p-5">
                        <div className="flex justify-between items-center">
                            {/* <UserContext.Consumer>
                                {({userName})=>
                            <h2 className=" w-[50%] text-[2.5rem] font-bold ">{userName}</h2>
                            }
                            </UserContext.Consumer> */}
                            <h2 className=" w-[50%] text-[2.5rem] font-bold ">{name}</h2>
                            <img src={avatar_url} className="avatar rounded-lg border w-[200px]"></img>
                        </div>
                        <h2 className="font-bold text-[2rem]">{location}</h2>
                        <hr></hr>
                        <p className=" text-gray-500"><span className="text-black font-bold text-[1.5rem]">Bio:</span> "{bio}"</p>
                    <div className="flex justify-between">
                    <h3>Followers: <span>{followers}</span></h3>
                        <h3>Following: <span>{following}</span></h3>
                    </div>
                    </div>
                </a>
           </div>
        )
    }
}

export default UserClass;