import { useState } from "react";

const LemonResturent = () => {
    const [formData, setFormData] = useState({
        goal: "",by: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.goal);
        console.log(formData.by);
        const hello = formData.by;
        console.log(hello);
        setFormData({ goal: "", by: "" })
    }
    const changeHendler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="goal" placeholder="Goal" onChange={changeHendler} />
                <input type="text" placeholder="Bye..." name="by" onChange={changeHendler} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LemonResturent;