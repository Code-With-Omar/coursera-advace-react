import { useState } from "react";

const Controlled = () => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value)
    }
    return (
        <form>
            <h2>This is the control component</h2>            
            <input type="text"
                onChange={handleChange}
                value={value}
            />
        </form>
    );
};

export default Controlled;