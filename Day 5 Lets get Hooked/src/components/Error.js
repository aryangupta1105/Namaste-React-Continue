import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
            <h1>
                Error {err.status}{err.statusText}Page Not Found!
            </h1>
            <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"></img>
            <h2>Sorry Aryan's Mistake</h2>
        </div>
    )
};

export default Error;