import { useEffect, useState } from "react";

const UseEffect = () => {
    const [toggle, setToggle] = useState(false)
    const clcikHendler = () => {
        setToggle(!toggle);
    }
    // useEffect(() => {
    //     document.title = toggle ? "Welcome to little Lemon" : "Using the useEffect"
    // })// without dependence
    useEffect(() => {
        document.title = toggle ? "Welcome to little Lemon" : "Using the useEffect"
    }, [toggle])// using dependencies
    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clcikHendler}>Toggle Message</button>
            {toggle && <h2>Welcome to Little lemon</h2>}
        </div>
    );
};

export default UseEffect;