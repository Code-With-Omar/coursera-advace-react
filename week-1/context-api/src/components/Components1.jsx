import { useState } from "react";
import { UserContext } from "./UserContext";
import Components2 from "./Components2";

const Components1 = () => {
    const [user, setUser] = useState({
        id: 190605,
        name: "Omarfaruk"
    })
    const [userData,setUserData]=useState({
        text:"Hello I am omar"
    })
    return (
        <UserContext.Provider value={{user,userData}}>
            <p>this is parent components</p>
            <Components2 />
        </UserContext.Provider>
    );
};

export default Components1;