import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(useRouteError());
    return(
        <div>
            <h1>
                Error {err.status} <br></br> Page {err.statusText}
            </h1>
            <h2>Sorry Aryan's Mistake</h2>
        </div>
    )
};

export default Error;