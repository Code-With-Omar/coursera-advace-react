import { useEffect } from "react";
import { useState } from "react";

const FetchDataWithUseEffect = () => {
    const [btcData, setBtcData] = useState({});
    const fetchData = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.bpi.USD)
                setBtcData(data.bpi.USD)
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1>Current BTC/USD data</h1>
            <p>Code: {btcData.code}</p>
            <p>Symbol: {btcData.symbol}</p>
            <p>Rate: {btcData.rate}</p>
            <p>Description: {btcData.description}</p>
            <p>Rate Float: {btcData.rate_float}</p>
        </div>
    );
};

export default FetchDataWithUseEffect;