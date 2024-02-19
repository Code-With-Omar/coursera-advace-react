import { useRef } from "react";

const Uncontrolled = () => {
    const inputRef = useRef(null);
    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        console.log(inputValue);

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>This is the Uncontrolled</h2>
            <input type="text" ref={inputRef} />
        </form>
      
    );
};

export default Uncontrolled;