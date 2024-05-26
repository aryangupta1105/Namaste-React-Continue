import { createContext } from "react";

const UserContext = createContext(
    {
        LoggedIn: "default",
    }
);

export default UserContext;