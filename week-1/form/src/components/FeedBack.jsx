import { useState } from "react";


const FeedBack = () => {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why the experience was poor");
            return;
        }
        console.log("form submit");
        setComment("");
        setScore("10");
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback form</h2>
                <div className="field">
                    <label htmlFor="score">
                        Score:{score}*
                    </label><br />
                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={score}
                        onChange={e => setScore(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="comment">Comment:</label><br />
                    <textarea name="" id="" cols="30" rows="10" onChange={e => setComment(e.target.value)}></textarea>
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    );
};

export default FeedBack;