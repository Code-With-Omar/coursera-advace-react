import { useEffect } from "react";


const CustomHook = (varName) => {
    useEffect(() => {
        console.log(varName);
    }, [varName]);
};

export default CustomHook;