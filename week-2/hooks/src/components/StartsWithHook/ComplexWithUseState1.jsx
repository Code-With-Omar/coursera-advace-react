import { useState } from "react";

const ComplexWithUseState1 = () => {
    const [greeting, setGreeting] = useState({
        greet: "Hello, World",
    })

    const updateGreeting = () => {
        const newGreeting = { ...greeting }
        newGreeting.greet = "Hello, World-Wide Web";
        setGreeting(newGreeting);
    }
    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update Greeting</button>
        </div>
    );
};

export default ComplexWithUseState1;