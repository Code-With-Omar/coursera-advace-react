import { useEffect, useState } from 'react';

const FindLuckUser = () => {
    const [user, setUser] = useState({});
    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => {
                setUser(data);
                console.log(data);
            });
    }
    useEffect(() => {
        fetchData()
    }, []) // Empty dependency array to run effect only once on component mount
    return (
        <div>
            <div>
                <h1>Data return</h1>
                {user.results && user.results.length >= 0 ? (
                    <>
                        <h2>First Name: {user.results[0].name.first}</h2>
                        <h2>Last Name: {user.results[0].name.last}</h2>
                    </>
                ) : (
                    <h2>Data pending....</h2>
                )}
            </div>
        </div>
    )
};

export default FindLuckUser;
