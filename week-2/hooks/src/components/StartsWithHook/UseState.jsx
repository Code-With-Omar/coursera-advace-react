import { useState } from "react";


const UseState = () => {
    const [resturentName, setresturentName] = useState("Lemon");
    const updatResturentName=()=>{
        setresturentName("Little Lemon");
    }
    return (
        <div>
            <h1>{resturentName}</h1>
            <button onClick={updatResturentName}>Update Restaurant name</button>
        </div>
    );
};

export default UseState;