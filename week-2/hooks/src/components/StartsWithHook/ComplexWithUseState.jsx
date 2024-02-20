import { useState } from "react";

const ComplexWithUseState = () => {
    const [greeting, setGreeting] = useState({ greet: "Hello, World" });
    const updateGreeting = () => {
        setGreeting({ greet: "hello, World-Wide web" });
    }
    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update Greeting</button>
        </div>
    );
};

export default ComplexWithUseState;