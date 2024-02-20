import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Components4 } from "./Components4";


const Componets3 = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h3>This is coming form components3</h3>
            <p>{user.name}</p>
            <p>{user.id}</p>
            <Components4 />
        </div>
    );
};

export default Componets3;