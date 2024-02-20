import { useContext } from "react";
import { UserContext } from "./UserContext";
import Componets3 from "./Componets3";

const Components2 = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h2>This is coming from component 2</h2>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
            <Componets3 />
        </div>
    );
};

export default Components2;