import React from "react";
import Shimmer from "./Shimmer";

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
        const {name , location,bio , followers , following , avatar_url } = this.state.jsonData;
        const{isLoading} = this.state;
        if(isLoading) return <Shimmer/>;
        return(
           <div className="user-class-component">
                <div>
                    <h2>{name}</h2>
                    <img src={avatar_url} className="avatar"></img>
                    <h2>{location}</h2>
                    <hr></hr>
                    <p>Bio: {bio}</p>
                    <h3>Followers: <span>{followers}</span></h3>
                    <h3>Following: <span>{following}</span></h3>
                </div>
           </div>
        )
    }
}

export default UserClass;