import { useState } from "react";

const UseEffect1 = () => {
    const [petName, setPetName] = useState("Fluffy");
    const nomeLopper = () => {
        if (petName === "Fluffy") {
            setPetName("Rexy");
        } else if (petName === "Rexy") {
            setPetName("Gizmo");
        } else if (petName === "Gizmo") {
            setPetName("Fluffy");
        }
    }
    return (
        <div>
            <h1>Id like to name my pet {petName}</h1>
            <button onClick={nomeLopper}>Pick a new name</button>
        </div>
    );
};

export default UseEffect1;